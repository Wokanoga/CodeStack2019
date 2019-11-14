let info = [
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4', 'thing5'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
    {
        Title: 'title',
        thingsToDo: ['thing1', 'thing2', 'thing3', 'thing4'],
    },
];

let anakin = document.getElementById('anakin');
let resurrect = document.getElementById('resurrect');
let exampleDiv = document.getElementById('exampleDiv');


anakin.addEventListener('click', function () {
    deleteStuff();
})

resurrect.addEventListener('click', function (){
    generateStuff();
})
//for (let i = 0; i < info.length; i++){

function deleteStuff() {
    while (exampleDiv.firstChild) {
        exampleDiv.removeChild(exampleDiv.firstChild);
    }
}

function generateStuff() {
    deleteStuff();
    info.forEach(obj => {

        let container = document.createElement('div')
        container.setAttribute('class', 'container');

        let title = document.createElement('h2');
        title.innerText = obj.Title;
        title.addEventListener('click', function(){

        })

        let ul = document.createElement('ul');
        obj.thingsToDo.forEach(ToDo => {
            let li = document.createElement('li');
            li.innerText = ToDo;
            ul.appendChild(li);
        });

        container.appendChild(title);
        container.appendChild(ul);
        exampleDiv.appendChild(container);
    });
}

generateStuff();


let hoverArea = document.getElementById('hoverArea');

hoverArea.addEventListener('mouseover', function(){
    hoverArea.setAttribute('class', 'red');
});

hoverArea.addEventListener('mouseout', function(){
    hoverArea.setAttribute('class', 'blue');
});