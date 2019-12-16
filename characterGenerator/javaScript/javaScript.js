// Lincoln MacKay
// Character Generator, October 2019


function randomStat() {
  let rolls = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ];
  let lowRoll;
  for (let roll of rolls){
    if (lowRoll) {
      if (lowRoll > roll) {
        lowRoll = roll;
      }
    } else {
      lowRoll = roll;
    }
  }
  return sumStats(rolls, lowRoll, 0);
}

function sumStats(rolls, lowRoll, modifier) {
  let sum = 0;
  for (let roll of rolls){
    sum += roll;
  }
  return sum - lowRoll + modifier;
}

function plainStatRolls() {
  return {
    STR : randomStat(),
    DEX : randomStat(),
    CON : randomStat(),
    WIS : randomStat(),
    INT : randomStat(),
    CHA : randomStat()
  }
  //So I need to figure out how to upload this shit to google drive.
}

function onSignIn(googleUser) {
  let profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
  let auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}