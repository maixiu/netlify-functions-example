exports.handler = function(event, context, callback) {
  if (event.httpMethod === 'OPTIONS') {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT',
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
