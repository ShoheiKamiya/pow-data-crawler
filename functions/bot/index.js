import axios from 'axios';

exports.handler = async (event, context, callback) => {
  const URL = 'https://api.line.me/v2/bot/message/broadcast';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
  };
  const data = {
    messages: event.messages,
  };
  const res = await axios.post(URL, data, { headers });
  return `${res.status}: ${res.statusText}`;
};
