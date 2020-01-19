const { sendEmail } = require('../handlers/nodemailer');

const sendFormData = ({ user, tel }) => {
  const message = `
    There should be a message you want to send to emails that you set in the config.js
    Also, you can add ${user} and ${tel} or anything that you receive from the client-side.
  `;

  sendEmail(message);
};

module.exports = {
  sendFormData,
};
