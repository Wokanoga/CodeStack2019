//Lincoln MacKay
//Character Generator, October 2019

//ApiKey: AIzaSyDpFJJzkRNyUkcGJoVLFI1o8D2-grKzE_I

// oathID: 423183880234-7ilhmehsp3laq0mle7turm75gkkp3rut.apps.googleusercontent.com
// secret: cl7Vf9VkOS628l2vJLmmIBU0

// oathID: 213673598023-tvcoasvrm4d1dt6gu2hm2e2b2agdb53s.apps.googleusercontent.com
// secret: LEqRZHi7DG_UWLWPNiTNSIBd

function randomStat(attribute) {
    let diceRolls = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
    ];
    let lowRoll;
    diceRolls.forEach(element => {
        if (lowRoll) {
            if (lowRoll > element) {
                lowRoll = element;
            }
        } else {
            lowRoll = element;
        }
    });
    return attribute + ' ' + sumStats(diceRolls, lowRoll, 0);
}

function sumStats(arr, lowRoll, modifier) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum - lowRoll + modifier;
}

function plainStatRolls(){
    return [
        randomStat('Str'),
        randomStat('Dex'),
        randomStat('Con'),
        randomStat('Wis'),
        randomStat('Int'),
        randomStat('Cha'),
    ];

    //So I need to figure out how to upload this shit to google drive.
}

// Client ID and API key from the Developer Console
var CLIENT_ID = '423183880234-7ilhmehsp3laq0mle7turm75gkkp3rut.apps.googleusercontent.com';
var API_KEY = 'AIzaSyDpFJJzkRNyUkcGJoVLFI1o8D2-grKzE_I';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    listFiles();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Print files.
 */
function listFiles() {
  gapi.client.drive.files.list({
    'pageSize': 10,
    'fields': "nextPageToken, files(id, name)"
  }).then(function(response) {
    appendPre('Files:');
    var files = response.result.files;
    if (files && files.length > 0) {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        appendPre(file.name + ' (' + file.id + ')');
      }
    } else {
      appendPre('No files found.');
    }
  });
}
