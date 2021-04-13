const express=require ("express")
const app = express()

const port =3000
const config = require("./config")
const client = require ("twilio")(config.accountSID, config.authToken)

// /login 
//     phonenumber
//     channel(call/sms)


app.get('/login', (req,res)=>{
    client
        .verify
        .services(config.serviceID)
        .verifications
        .create({
            to: req.query.phonenumber,
            channel: req.query.channel
        })
        .then((data)=>{
            res.status(200).send(data)
        })
})

app.listen(port,()=>{
    console.log("Server is running at"+ port )
})