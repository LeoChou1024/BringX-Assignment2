const express = require('express');
const app = express();
const sgMail = require('@sendgrid/mail');
// @ts-ignore
sgMail.setApiKey(process.env.SENDGRID);
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log(process.env.SENDGRID);
app.get('/', (req, res) => {
  res.send(process.env.SENDGRID);
});

app.post('/mail', (req, res) => {
  const postData = req.body;
  const msg = {
    to: postData.to,
    from: 'leo604leo604@gmail.com',
    subject: postData.subject,
    text: postData.body,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.json('Email sent successfully');
    })
    .catch((error) => {
      res.json('Error sending email:' + error);
    });
});

const PORT = process.env.PORT || 8016;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
