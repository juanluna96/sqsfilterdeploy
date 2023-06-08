"use strict";

module.exports.handler = async (event) => {
  const message = "First Handler! Your function executed successfully!";

  console.log(message);
  console.log("event", event);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
