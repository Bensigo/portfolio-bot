const callMessageAPI = require('./callMessageAPI');
const apiai =  require('apiai');
const api_ai_token = process.env.API_AI_TOKEN 
const app = apiai(api_ai_token);

module.exports = (event)=>{
    const senderID = event.sender.id;
    const message = event.message.text;

  
    console.log('sending message to callMessage Api')   
    //calling apiai 
   const request = app.textRequest(message,{sessionId:process.env.SESSION_ID})

   request.on('response',(response)=>{
      const textMessage = response.result.fulfillment.speech;
          const messageData = {
            recipient:{id:senderID},
            message:{text:textMessage}
        }
         callMessageAPI(messageData);
        

   })
   request.on('error',(error)=>{
        console.log(error);
   })

   request.end();
   

}