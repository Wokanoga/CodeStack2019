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
    randomNamesArea.innerHTML = '';
    let rNum = Math.floor(Math.random() * names.length);
    let p = document.createElement('p');
    p.innerText = names[rNum];
    randomNamesArea.appendChild(p);
});


function deleteArea(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}