const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const sendmail = require('./config/email')
require('dotenv').config()
const PORT = process.env.SERVER_PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/email',(req,res)=>{
    // 인증키를 얻기
    const UserEmail = req.body.email;
    sendmail.sendEmail(UserEmail)

    res.send("good")
})

app.listen(PORT, ()=>{
    console.log(`SEVER LOG:: [${PORT} 번] 포트 개방 `)
    console.log(`SEVER LOG:: 접속 주소 < http://localhost:${PORT} >`)
})