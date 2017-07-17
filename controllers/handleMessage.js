const processMessage = require('../helpers/processMessage');
/**
 * GUIDE:
 * export a controller 
 * check if ihas a page event
 * then loop throgh entry 
 * then loop throug the messaging entry 
 * check if the event has a message 
 * call a recivedMessage method which is imported from helper
 * send a status code of 200 an 
 */
   
module.exports = (req,res)=>{
    const data = req.body
    if(data.object === 'page'){
       data.entry.foreach( entry => {
           entry.messaging.foreach(event=>{
               if(event.message){
                processMessage(event)  
               }
           })
       })
        res.status(200).end();
    }
    

}