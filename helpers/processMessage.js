const callMessageAPI = require('./callMessageAPI');

module.exports = (event)=>{
    const senderID = event.sender.id;
    const textMessage = event.message.text;

    const messageData = {
            recipient:{id:senderID},
            message:{text:textMessage}
    }
    callMessageAPI(messageData);

}