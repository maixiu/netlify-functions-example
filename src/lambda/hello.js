exports.handler = function(event, context, callback) {
  if (event.httpMethod === 'OPTIONS') {
    callback(null, {
      statusCode: 200,
      headers: {
        'Allow': 'OPTIONS,GET,POST,PUT,DELETE,PATCH',
        'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE,PATCH',
        'Access-Control-Allow-Headers': 'content-type',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      }
    });
  } else {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: "NOT Hello, World"
    });
  }
};
