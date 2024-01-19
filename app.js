const express = require('express');
const app = express();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

app.get('/', (req, res) => {
  res.send('Hello, Vercel!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
