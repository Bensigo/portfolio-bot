
module.exports = (req,res)=>{
        //verifiy token with facebook and return a challange
        if(req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === process.env.TOKEN){
            res.status(200).send(req.query['hub.challenge']);
        }else{
            res.status(403).send('<h6>Sorry you are not authorize to view this page</h6>');
        }
}