const firebase = require('firebase');

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
  // const data = req.body;
  const fName = req.body.fname;
  const lName = req.body.lname;
  const email = req.body.email;
  const telephone = req.body.telephone;
  const hairStrokes = req.body.hairStrokes;
  const powdered = req.body.powdered;
  const lips = req.body.lips;
  const eyeliners = req.body.eyeliners;
  const hairlines = req.body.hairlines;
  const microbladingIntro = req.body.microbladingIntro;
  const fiveDaysSeminar = req.body.fiveDaysSeminar;
  const advancedMicroblading = req.body.advancedMicroblading;
  const oneOnOne = req.body.oneOnOne;
  const hearAboutUs = req.body.hearAboutUs;
  const comments = req.body.comments;
  const seminars = [];

  if (hairStrokes) {
    seminars.push(hairStrokes);
  }
  if (powdered) {
    seminars.push(powdered);
  }
  if (lips) {
    seminars.push(lips);
  }
  if (eyeliners) {
    seminars.push(eyeliners);
  }
  if (hairlines) {
    seminars.push(hairlines);
  }
  if (microbladingIntro) {
    seminars.push(microbladingIntro);
  }
  if (fiveDaysSeminar) {
    seminars.push(fiveDaysSeminar);
  }
  if (advancedMicroblading) {
    seminars.push(advancedMicroblading);
  }
  if (oneOnOne) {
    seminars.push(oneOnOne);
  }
  // console.log('data', data);
  const db = firebase.database();
  const ref = db.ref('seminarRegistration');

  const seminarsRef = ref.child('seminars');
  const newSeminarRef = seminarsRef.push();

  newSeminarRef.set({
    fName: fName,
    lName: lName,
    email: email,
    telephone: telephone,
    seminars: seminars,
    hearAboutUs: hearAboutUs,
    comments: comments
  })
    .then(() => {
      res.redirect('/');
    })
    .catch(() => {
      res.redirect('/register');
    });
  // firebase.database().push().set({
  //   fName: fName,
  //   lName: lName,
  //   email: email,
  //   telephone: telephone,
  //   seminars: seminars,
  //   hearAboutUs: hearAboutUs,
  //   comments: comments
  // });
}

module.exports.seminarRegistrationForm = seminarRegistrationForm;
