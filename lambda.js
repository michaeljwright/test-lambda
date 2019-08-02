"use strict";

const aws = require("aws-sdk");

const TOPIC_ARN = process.env.TOPIC_ARN;

/**
 * Gets a list of buckets
 */
exports.handler = function(event, context, callback) {
  let sns = new aws.SNS();

  var params = {
    TopicArn: TOPIC_ARN,
    Message: event.message || "",
    Subject: event.subject || "unknown"
  };

  sns.publish(params, (err, data) => {
    if (err) {
      return callback(err);
    }

    callback(null, {
      id: data.MessageId,
      result: "message sent"
    });
  });
};
