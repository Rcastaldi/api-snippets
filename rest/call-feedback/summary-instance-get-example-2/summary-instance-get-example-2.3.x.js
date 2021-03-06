// Download the Node helper library from twilio.com/docs/node/install
// These identifiers are your accountSid and authToken from
// https://www.twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

const feedbackSummarySid = 'FSa346467ca321c71dbd5e12f627deb854';

client.calls
  .feedbackSummaries(feedbackSummarySid)
  .fetch()
  .then(feedback => console.log(feedback.dateCreated));
