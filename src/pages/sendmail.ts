import { createTransport } from 'nodemailer';
import type { contactData } from './contact.astro';
const API_KEY = await import.meta.env.SENDGRID_API_KEY;

export async function post({ request }: any) {
    const data: contactData = await request.json();

    const mailData = {
        from: 'contact@sintaxis.io',
        reply: 'marcomongaloiii@gmail.com',
        to: 'marcomongaloiii@gmail.com',
        subject: data.subject,
        text: `
        Message sent to you from contact form in your Portfolio

        Name: ${data.name}
        Email: ${data.email}
        Organization: ${data.organization}
        
        ${data.body}
        `
    }

    const transporter = createTransport({
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: true,
        auth: {
            user: 'apikey',
            pass: process.env.SENDGRID_API_KEY ?? API_KEY
        }
    })

    const response = await new Promise((resolve, reject) => {
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

    return new Response(JSON.stringify(response), { status: 200 });
}