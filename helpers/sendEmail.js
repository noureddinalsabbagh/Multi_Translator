const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (name, email, code) => {
  let API_URL = "http://localhost:3000"
  if (process.env.NODE_ENV === 'production') {
    API_URL = "https://multi-translator.herokuapp.com/"
  }
  const msgObj = {
    to: email,
    from: process.env.EMAIL_FROM,
    subject: 'Please confirm your account!',
    html: `<h1> Email Confirmation</h1>
    <div><h2>Hello ${name}</h2>
    <p>Thank you for registration. Please confirm your email by clicking on the following link</p>
    <a href=${API_URL}/confirm/${code}> Click here</a></div>
    `,
  };
  try {
    await sgMail.send(msgObj);

    return res.status(200).json({ msg: `email sent successfully to ${email}` });
  } catch (error) {
    if (error.response) {
      console.error(error.response.body);
      return res.status(500).json({ errMsg: 'failed to send an email' });
    }
  }
};

module.exports = sendEmail;
