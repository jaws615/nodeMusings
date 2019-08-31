var request = require("request");

var options = { method: 'POST',
  url: 'https://api.twilio.com/2010-04-01/Accounts/' + process.env.ACCOUNTSMS + '/Messages.json',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     Authorization: 'Basic ' + process.env.TOKEN,
     'Content-Type': 'application/x-www-form-urlencoded' },
  form: 
   { To: '+17176209092',
     Body: 'This is my message',
     From: '+17176106210' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
