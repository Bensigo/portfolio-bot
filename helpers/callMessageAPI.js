const request = require('request');

function callMessageAPI(messageData){
    request({
        url:'https://graph.facebook.com/v2.6/me/messages',
        qs:{access_token:process.env.FACEBOOK_ACCESS_TOKEN},
        method:'POST',
        json:messageData,    
    },(error,response,body)=>{
        if(!error && response.statusCode === 200){
            console.log('message sent sucessfully ')
        }else{
            console.log('message sent failed')
        }
        
    })   
}
module.exports = callMessageAPI;


