const firebase = require('firebase');
const nodemailer = require('nodemailer');

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCDaC3iX_21YSAE0G0QWeM4DSjO0X0sd0Q',
  authDomain: 'outstanding-cceab.firebaseapp.com',
  databaseURL: 'https://outstanding-cceab.firebaseio.com',
  projectId: 'outstanding-cceab',
  storageBucket: '',
  messagingSenderId: '1061074196726'
};
firebase.initializeApp(config);

const database = firebase.database();

function seminarRegistrationForm(req, res, next) {
  // console.log('body', req.body)
  // const data = req.body;
  const fName = req.body.fname;
  const lName = req.body.lname;
  const email = req.body.email;
  const telephone = req.body.telephone;
  const fiveDaysHairStrokes = req.body.fiveDaysHairStrokes;
  const threeDaysHairStrokes = req.body.threeDaysHairStrokes;
  const powdered = req.body.powderedSeminar;
  const advancedMicroblading = req.body.advancedMicrobladingSeminar;
  const lips = req.body.lipsSeminar;
  const eyeliners = req.body.eyelinerSeminar;
  const hairlines = req.body.hairlineSeminar;
  const oneOnOne = req.body.oneOnOneSeminar;
  const hearAboutUs = req.body.hearAboutUs;
  const comments = req.body.comments;

  const registrationData = {
    firstName: fName,
    lastName: lName,
    email: email,
    telephone: telephone,
    fiveDaysSeminar: fiveDaysHairStrokes,
    threeDaysSeminar: threeDaysHairStrokes,
    powderedSeminar: powdered,
    advancedMicroblading: advancedMicroblading,
    lips: lips,
    eyeliners: eyeliners,
    hairlines: hairlines,
    oneOnOne: oneOnOne,
    hearAboutUs: hearAboutUs,
    comments: comments
  };

  // console.log('data', data);
  const db = firebase.database();
  const ref = db.ref('seminarRegistration');

  const seminarsRef = ref.child('seminars');
  const newSeminarRef = seminarsRef.push();

  newSeminarRef.set({
    firstName: fName,
    lastName: lName,
    email: email,
    telephone: telephone,
    fiveDaysSeminar: fiveDaysHairStrokes,
    threeDaysSeminar: threeDaysHairStrokes,
    powderedSeminar: powdered,
    advancedMicroblading: advancedMicroblading,
    lips: lips,
    eyeliners: eyeliners,
    hairlines: hairlines,
    oneOnOne: oneOnOne,
    hearAboutUs: hearAboutUs,
    comments: comments
  })
    .then(() => {
      nodemailer.createTestAccount((err, account) => {
        console.log('registrationData', registrationData);

        const htmlMessage = '<html><h1>New Online Seminar Registration</h1><br /><p>' + '<p>First Name: ' + registrationData.firstName + '</p>' + '<p>Last Name: ' + registrationData.lastName +'</p>' + '<p>Email: ' + registrationData.email +'</p>' + '<p>Telephone: ' + registrationData.telephone +'</p>' + '<p>Five Days Seminar: ' + registrationData.fiveDaysSeminar + '</p>' + '<p>Three Days Seminar: ' + registrationData.threeDaysSeminar + '</p>' + '<p>Powdered Seminar: ' + registrationData.powderedSeminar + '</p>' + '<p>Advanced Microblading Seminar: ' + registrationData.advancedMicroblading + '</p>' + '<p>Lips Seminar: ' + registrationData.lips + '</p>' + '<p>Eyeliners Seminar: ' + registrationData.eyeliners + '</p>' + '<p>Hairlines Seminar: ' + registrationData.hairlines + '</p>' + '<p>One On One Seminar: ' + registrationData.oneOnOne + '</p>' + '<p>How did you hear about us?: ' + registrationData.hearAboutUs +'</p>' + '<p>Questions or Comments: ' + registrationData.comments +'</p>' + '</p></html>';

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: 'outstandingtrainingcenter@gmail.com', //generated ethereal user
            pass: '90Bowery308'
          }
        });

        // setup email data with unicode symbols
        let emailMessage = {
          from: '"Seminar Registration" <outstandingtrainingcenter@gmail.com>', // sender address
          to: 'liweibeauty88@gmail.com',
          subject: 'New Online Seminar Registration',
          text: 'Online Seminar Registration', // plain text body
          html: htmlMessage // html body
        };

        transporter.sendMail(emailMessage, (error, info) => {
          if (error) {
            return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          // console.log('Preview URL: $s', nodemailer.getTestMessageUrl(info));
        });
      });

      res.redirect('/');
    })
    .catch(() => {
      res.redirect('/register');
    });
}

module.exports.seminarRegistrationForm = seminarRegistrationForm;
