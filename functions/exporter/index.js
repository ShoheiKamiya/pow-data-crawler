const AWS = require('aws-sdk');
const fs = require('fs');

const createObjectCsvWriter = require('csv-writer').createObjectCsvWriter;

exports.handler = async (event, context, callback) => {
  const yyyymmdd = (date) => {
    return `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
  };

  // クローリング
  const lambda = new AWS.Lambda();
  const mountainClassNames = [
    'GrandHirafu',
    'HakubaGoryu',
    'Madarao',
    'Nozawa',
    'Rusutsu',
    'Togakushi',
  ];
  const crawlers = mountainClassNames.map((mountain) => {
    const params = {
      FunctionName: process.env.CRAWLER_FUNCTION_NAME,
      Payload: JSON.stringify({ mountain }),
    };
    return lambda.invoke(params).promise();
  });
  const values = await Promise.all(crawlers);
  const results = values.map((value) => JSON.parse(value.Payload));
  console.log({ results });

  // CSVに書き出し
  const fileName = yyyymmdd(new Date());
  const path = `/tmp/${fileName}.csv`;
  const csv = createObjectCsvWriter({
    path,
    header: [
      { id: 'id', title: 'id' },
      { id: 'snowfall', title: 'snowfall' },
      { id: 'depth', title: 'depth' },
      { id: 'temperature', title: 'temperature' },
      { id: 'updated', title: 'updated' },
    ],
  });
  await csv.writeRecords(results);
  console.log('*************************');
  console.log('DONE!! csv is exported!');
  console.log('*************************');

  // S3に保存
  const s3 = new AWS.S3();
  const bucketName = process.env.S3_BUCKET_NAME;
  const keyName = `${fileName}.csv`;

  await s3
    .putObject({
      Bucket: bucketName,
      Key: keyName,
      Body: fs.readFileSync(path),
    })
    .promise();
};
