const nodemailer = require('nodemailer');
const { config } = require('../../config');

const sendEmail = message => {
  const transporter = nodemailer.createTransport(config.sender);

  const mailOptions = {
    ...config.mailOptions,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log('Email sended: ' + info.response);
    }
  });
};

module.exports = {
  sendEmail,
};
