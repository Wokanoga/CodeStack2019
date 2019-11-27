let objArr = [
    {
        first: 'Lincoln',
        last: 'MacKay',
        heDoes: 'Dota 2'
    },
    {
        first: 'Abraham',
        last: 'Lopez',
        heDoes: '???'
    },
    {
        first: 'Alex',
        last: 'Her',
        heDoes: 'Pokemon'
    },
    {
        first: 'Bisola',
        last: 'Awujoola',
        heDoes: '???'
    },
    {
        first: 'Carson',
        last: 'Huber',
        heDoes: 'Paintball/Airsoft?'
    },
    {
        first: 'Carter',
        last: 'Galvez',
        heDoes: 'Dark Souls'
    },
    {
        first: 'Deon',
        last: 'Simmons',
        heDoes: 'GUILTY GEAR'
    },
    {
        first: 'Frakie',
        last: 'Chavez',
        heDoes: '???'
    },
    {
        first: 'Nayo',
        last: 'Ortiz',
        heDoes: 'Drawing'
    },
    {
        first: 'Zachary',
        last: 'Davis',
        heDoes: 'SSBM'
    },
];

let randomBtn = document.getElementById('randomBtn');
let randomNamesArea = document.getElementById('randomNamesArea');

randomBtn.addEventListener('click', function (e) {
    //clear the area
    randomNamesArea.innerHTML = '';

    //declare everything I need
    let rNum = Math.floor(Math.random() * objArr.length);
    let col1 = document.createElement('div');
    let col2 = document.createElement('div');
    let col3 = document.createElement('div');
    let pFirst = document.createElement('p');
    let pLast = document.createElement('p');
    let pDoes = document.createElement('p');

    //set attributes needed
    col1.setAttribute('class','col');
    col2.setAttribute('class','col');
    col3.setAttribute('class','col');

    //apply content
    pFirst.innerText = objArr[rNum].first;
    pLast.innerText = objArr[rNum].last;
    pDoes.innerText = objArr[rNum].heDoes;

    //append
    col1.appendChild(pFirst);
    col2.appendChild(pLast);
    col3.appendChild(pDoes);
    randomNamesArea.appendChild(col1);
    randomNamesArea.appendChild(col2);
    randomNamesArea.appendChild(col3)

});