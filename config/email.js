const nodemailer = require('nodemailer');
const smtpTransporter = require('nodemailer-smtp-transport');
require('dotenv').config()


module.exports =  {
    sendEmail:(UserEmail)=>{
        //이메일 보내기
        const smtpTransport = nodemailer.createTransport(smtpTransporter({
            service: 'Naver',
            host: 'smtp.naver.com',
            auth: {
                user: process.env.NAVER_ID,     //보내는 분의 메일계정
                pass: process.env.NAVER_PASSWORD
            }
        }));
        const mailOption = {
            from: `dev-kang-011107-th-0@naver.com`, // 보내는 분의 메일계정
            to: UserEmail,  // 받는 분의 메일계정 (여러 개 가능)
            subject: "공부해라123123",
            text: "공부해라?",
            html: "<b>Hello world?</b>"
        }

        
        console.log(mailOption)
        smtpTransport.sendMail(mailOption, (err,info) => { // 메일을 보내는 코드
            if(err) return false;
            else return info
        });

    }
}