const request = require('request');

function callMessageAPI(messageData){
    request({
        url:'',
        qs:{access_token:process.env.FACEBOOK_ACCESS_TOKEN},
        method:'POST',
        json:messageData,    
    },(error,responese,body)=>{
        if(!error && responese){
            console.log('message sent sucessfully ')
        }
        console.log('message sent failed')
    })   
}
module.exports = callMessageAPI;


