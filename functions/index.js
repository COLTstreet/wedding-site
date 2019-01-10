// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport('smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com');

exports.sendContactMessage = functions.database.ref('/rsvps/{pushKey}').onWrite((change, context) => {
    const beforeData = change.before.val(); // data before the write
    const afterData = change.after.val(); // data after the write

    // Only send email for new messages.
    if (beforeData) {
      return;
    }

    const val = afterData;

    const mailOptions = {
      to: 'caroleandcolt@gmail.com',
      subject: `Information Request from ${val.name}`,
      html: val.html
    };
    return mailTransport.sendMail(mailOptions).then(() => {
      return console.log('Mail sent to: caroleandcolt@gmail.com');
    });
  });