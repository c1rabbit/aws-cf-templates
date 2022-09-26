var AWS = require('aws-sdk');
var ses = new AWS.SES();

var RECEIVER = 'mail@calvinthanh.com';
var SENDER = 'mail@calvinthanh.com';

var response = require('cfn-response');

exports.handler = function(event, context) {
    console.log('Received event:', event);
   
    sendEmail(event, function (err, data) {
        context.done(err, null);
        if(err){
            return err;
        }
       
    });
};

function sendEmail (event, done) {
    console.log(event)
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'name:\t' + event.name + '\nemail:\t' + event.email + '\nmessage:\n' + event.message,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'Website Referral Form: ' + event.name,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    ses.sendEmail(params, done);
}