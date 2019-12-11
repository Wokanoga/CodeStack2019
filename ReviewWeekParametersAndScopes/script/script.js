'use strict';
//Get HTML buttons and elements.
let inputContestant = document.getElementById('inputContestant');
let consoleLogBtn = document.getElementById('consoleLogBtn');
let deleteData = document.getElementById('deleteData');
let leaderboardArea = document.getElementById('leaderboardArea');
let resetScore = document.getElementById('resetScore');
let players;

//Set the player variable equal to local storage if there is any, else it will be an empty array.
if (localStorage.getItem('leaderboardData')) {
    players = JSON.parse(localStorage.getItem('leaderboardData'));
    populateLeaderboard();
} else {
    players = [];
}

//Add event listeners
consoleLogBtn.addEventListener('click', function () {
    console.log(players);
});

deleteData.addEventListener('click', function () {
    players = [];
    populateLeaderboard();
    saveData();
});

function populateWeatherList(){
    //delete area
    //for loop through example
    //for () {
//       generate city list item
    //}
}

example[something].url

inputContestant.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        let obj = {
            name: e.target.value,
            score: 0
        }
        players.push(obj);
        inputContestant.value = '';
        playersSort();
        saveData();
        populateLeaderboard();
        // e.target.value = '';
        // this.value = '';
    }
});

//generate leaderboard
function populateLeaderboard() {
    anakin(leaderboardArea);
    for (let player of players) {
        //Initialize variables
        let row = document.createElement('div');
        let col1 = document.createElement('div');
        let col2 = document.createElement('div');
        let col3 = document.createElement('div');
        let button = document.createElement('button');
        let name = document.createElement('p');
        let score = document.createElement('p');

        //Set attributes
        row.setAttribute('class', 'row');
        col1.setAttribute('class', 'col');
        col2.setAttribute('class', 'col btn-end');
        col3.setAttribute('class', 'col');
        button.setAttribute('class', 'btn btn-primary');

        //Set content
        name.innerText = player.name;
        score.innerText = player.score;
        button.innerText = '+';

        //Button functionality
        button.addEventListener('click', function (e) {
            player.score++;
            playersSort();
            saveData();
            populateLeaderboard();
        });

        //Append
        col1.appendChild(name);
        col2.appendChild(button);
        col3.appendChild(score);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        leaderboardArea.appendChild(row);
    }
}

resetScore.addEventListener('click', function () {
    for (let player of players) {
        player.score = 0;
    }
    //Both of these work. Don't use them.  Bad practice.
    //players.map(x => x.score = 0);
    //players.filter(x => x.score = 0);
    saveData();
    populateLeaderboard();
});

function playersSort(){
    players.sort((a, b) => (a.name > b.name) ? 1 : -1);
    players.sort((a, b) => (a.score <= b.score) ? 1 : -1);
}
//Function that saves current players to local storage.
function saveData() {
    localStorage.setItem('leaderboardData', JSON.stringify(players));
}

function anakin(chamber) {
    while (chamber.firstChild) {
        chamber.removeChild(chamber.firstChild);
    }
}