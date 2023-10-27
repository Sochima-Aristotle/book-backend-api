const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })

const setupTransport = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
}
console.log('tran', setupTransport)
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport(setupTransport);

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  console.log('asdf', message)
  const info = await transporter.sendMail(message);

  console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;
