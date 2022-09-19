import fetch from 'node-fetch';
import { createTransport } from 'nodemailer';

export async function post(req: any) {
    const data = await req.json();

    const mailData = {
        from: 'contact@sintaxis.io',
        reply: 'marcomongaloiii@gmail.com',
        to: 'marcomongaloiii@gmail.com',
        subject: data.subject,
        text: data.body
    }

    const transporter = createTransport({
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: true,
        auth: {
            user: 'apikey',
            pass: process.env.SENDGRID_API_KEY
        }
    })

    const response: any = await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        })
    })

    const responseData = await response.json();

    return new Response(JSON.stringify(responseData), { status: 200 });
}