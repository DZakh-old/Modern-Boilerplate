module.exports.config = {
  development: {
    port: process.env.PORT || 3000,
    sender: {
      direct: true,
      host: 'smtp.yandex.ru',
      port: 465,
      auth: {
        user: 'SENDER_EMAIL',
        pass: 'SENDER_PASS',
      },
      secure: true,
    },
    mailOptions: {
      from: 'SENDER_EMAIL',
      to: `DEVELOPER_EMAIL`,
      subject: 'New notification!',
      text: null,
    },
  },
  production: {
    port: process.env.PORT || 3000,
    sender: {
      direct: true,
      host: 'smtp.yandex.ru',
      port: 465,
      auth: {
        user: 'SENDER_EMAIL',
        pass: 'SENDER_PASS',
      },
      secure: true,
    },
    mailOptions: {
      from: 'SENDER_EMAIL',
      to: `
        SITE_OWNER_EMAILS
      `,
      subject: 'New notification!',
      text: null,
    },
  },
}[process.env.NODE_ENV || 'production'];
