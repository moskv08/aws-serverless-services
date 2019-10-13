'use strict';

module.exports.sendReminderDaily = (event, context, callback) => {

  const AWS = require('aws-sdk');
  AWS.config.update({ region: 'eu-west-1' });
  const ses = AWS.SES();
  const fs = require('fs');

  // Get e-mail template
  const emailHtml = fs.readFileSync('./templates/dailyReminder.html', 'utf-8');
  const toAndFromEmail = 'fabrizio_39@hotmail.com'
  const params = {
    Destination: {
      ToAddress: [toAndFromEmail]
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailHtml
        },
        Text: {
          Charset: "UTF-8",
          Data: "Remember to be a non-selfish person to create new valuable things."
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "WoofGarden Reminder"
      }
    },
    ReplyToAddresses: [toAndFromEmail],
    Source: toAndFromEmail
  };
  ses.sendEmail(params, function (err, data) {
    // Error handler
    if (err) console.log(err, err.stack)
    // succesfull response
    else callback(null, data)
  });
};

module.exports.sendReminderWeekend = (event, context, callback) => {

  const AWS = require('aws-sdk');
  AWS.config.update({ region: 'eu-west-1' });
  const ses = AWS.SES();
  const fs = require('fs');

  // Get e-mail template
  const emailHtml = fs.readFileSync('./templates/weekendReminder.html', 'utf-8');
  const toAndFromEmail = 'fabrizio_39@hotmail.com'
  const params = {
    Destination: {
      ToAddress: [toAndFromEmail]
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailHtml
        },
        Text: {
          Charset: "UTF-8",
          Data: "Remember to be a non-selfish person to create new valuable things."
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "WoofGarden Reminder"
      }
    },
    ReplyToAddresses: [toAndFromEmail],
    Source: toAndFromEmail
  };
  ses.sendEmail(params, function (err, data) {
    // Error handler
    if (err) console.log(err, err.stack)
    // succesfull response
    else callback(null, data)
  });
};
