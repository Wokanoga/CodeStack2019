let consoleLogBtn = document.getElementById('consoleLogBtn');
let playerInput = document.getElementById('playerInput');
let leaderboardArea = document.getElementById('leaderboardArea');
let sortBtn = document.getElementById('sortBtn')
let leaderboardData = [];

if (localStorage.getItem('ANAKIN')){
    leaderboardData = JSON.parse(localStorage.getItem('ANAKIN'));
    populateLeaderboard();
}

playerInput.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        let obj = {
            name: e.target.value,
            score: 0
        }
        leaderboardData.push(obj);
        saveData();
        e.target.value = '';
        populateLeaderboard();
    }
});

consoleLogBtn.addEventListener('click', function(){
    console.log(leaderboardData);
});

function populateLeaderboard(){
/* <div class="row">
      <div class="col">
        <p>Player Name</p>
      </div>
      <div class="col">
        <button class="btn btn-primary">+</button>
      </div>
      <div class="col">
        <p>0</p>
      </div>
    </div> */
    leaderboardArea.innerHTML = '';

    for (let player of leaderboardData){
        let row = document.createElement('div');
        let col1 = document.createElement('div');
        let col2 = document.createElement('div');
        let col3 = document.createElement('div');
        let pPlayer = document.createElement('p');
        let pScore = document.createElement('p');
        let button = document.createElement('button');
    
        row.setAttribute('class', 'row');
        col1.setAttribute('class', 'col');
        col2.setAttribute('class', 'col');
        col3.setAttribute('class', 'col');
        button.setAttribute('class', 'btn btn-primary');
    
        pPlayer.innerText = player.name;
        pScore.innerText = player.score;
        button.innerText = '+';
    
        button.addEventListener('click', function(){
            player.score++;
            pScore.innerText = player.score;
            saveData();
            //populateLeaderboard();
        });
    
        col1.appendChild(pPlayer);
        col2.appendChild(button);
        col3.appendChild(pScore);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
    
        //final append
        leaderboardArea.appendChild(row);
    }

}

sortBtn.addEventListener('click', function(){
    leaderboardData.sort((a, b) => (a.name > b.name) ? 1 : -1);
    leaderboardData.sort((a, b) => (a.score <= b.score) ? 1 : -1);
    saveData();
    populateLeaderboard();
});

function saveData() {
    localStorage.setItem('ANAKIN', JSON.stringify(leaderboardData));
}