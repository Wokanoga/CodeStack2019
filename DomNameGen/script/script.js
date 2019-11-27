let names = ['lincoln', 'tony', 'bum', 'examplePerson'];

let randomBtn = document.getElementById('randomBtn');

randomBtn.addEventListener('click', function(e){
    let rNum = Math.floor(Math.random()*names.length);
    console.log(names[rNum]);
});