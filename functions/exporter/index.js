const AWS = require('aws-sdk');
const fs = require('fs');
const axios = require('axios');

const createObjectCsvWriter = require('csv-writer').createObjectCsvWriter;

exports.handler = async (event, context, callback) => {
  const yyyymmdd = (date) => {
    return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(
      date.getDate() + 1,
    ).padStart(2, '0')}`;
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
  const params = values.map((value) => JSON.parse(value.Payload).params);
  const messages = values.map((value) => JSON.parse(value.Payload).messages);

  // slackに通知
  const URL = process.env.SLACK_WEBHOOK_URL;
  const text = {
    text: `this is ${process.env.STAGE}\n${JSON.stringify(params)}`,
  };
  axios
    .post(URL, text)
    .then(({ status, statusText }) => {
      console.log('success', status, statusText);
    })
    .catch(({ response }) => {
      console.log('error', response.status, response.statusText);
    });

  // botを呼び出し
  await lambda
    .invoke({
      FunctionName: 'pow-data-bot-dev',
      Payload: JSON.stringify({
        messages: [
          {
            type: 'flex',
            altText: '本日のスキー場の状況をお知らせします！',
            contents: {
              type: 'carousel',
              contents: messages,
            },
          },
        ],
      }),
    })
    .promise();

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
  await csv.writeRecords(params);
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
