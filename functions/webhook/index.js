import axios from 'axios';
import crypto from 'crypto';

exports.handler = async (event, context) => {
  const channelSecret = process.env.LINE_CHANNEL_SECRET;
  const body = event.body;
  const signature = crypto.createHmac('SHA256', channelSecret).update(body).digest('base64');
  if (signature !== event.headers['x-line-signature']) {
    return {
      statusCode: 400,
    };
  }

  const webhookEvent = JSON.parse(event.body).events[0];
  if (webhookEvent.type !== 'follow') {
    return;
  }
  const userId = webhookEvent.source.userId;
  const headers = {
    Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
  };
  const LINE_ENDPOINT = `https://api.line.me/v2/bot/profile/${userId}`;
  const res = await axios.get(LINE_ENDPOINT, { headers });
  const profile = res.data;

  // slack
  const URL = 'https://slack.com/api/chat.postMessage';
  const slackHeaders = {
    Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
  };
  const payload = {
    channel: process.env.SLACK_CHANNEL,
    text: `${profile.displayName}(${userId})が友達追加しました！`,
  };

  try {
    await axios.post(URL, payload, { headers: slackHeaders });
  } catch (e) {
    console.log(e);
  }
};
