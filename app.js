const express = require('express');
const cors = require('cors');
const logger = require('morgan');
// const sgMail = require('@sendgrid/mail'); // new

require('dotenv').config();

// start new
// const { SENDGRID_API_KEY } = process.env;
// sgMail.setApiKey(SENDGRID_API_KEY);

// const email = {
//   to: 'vitaliy.pshenichny@srdsc.com',
//   from: '4kvaap@gmail.com',
//   subject: 'test',
//   html: '<p>Test from localhost:3000</p>',
// };

// sgMail
//   .send(email)
//   .then(() => console.log('Email send success'))
//   .catch((error) => console.log(error.message));
// end new

const authRouter = require('./routes/api/auth');
const contactsRouter = require('./routes/api/contacts');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
