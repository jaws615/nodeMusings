var request = require("request");

var options = { method: 'POST',
  url: 'https://api.twilio.com/2010-04-01/Accounts/XXXXXX/Messages.json',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'Content-Length': '67',
     'Accept-Encoding': 'gzip, deflate',
     Host: 'api.twilio.com',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.16.3',
     Authorization: 'Basic QUMzYWQ4MDJhNmJmOWVjYjM5Mzk5YTE0YzJjNzkwOTNlZjozM2I4ZDk4YjYwMzQ0NTZlNGEwOTU1YTM4YTJhNjkzMA==',
     'Content-Type': 'application/x-www-form-urlencoded' },
  form: 
   { To: '+17176209092',
     Body: 'This is my message',
     From: '+17176106210' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
