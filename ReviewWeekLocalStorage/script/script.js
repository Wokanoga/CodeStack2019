//Get buttons/Areas
let consoleLogLocalBtn = document.getElementById('consoleLogLocalBtn');
let deleteLocalStorage = document.getElementById('deleteLocalStorage');
let listTitleInput = document.getElementById('listTitleInput');
let submitTitleBtn = document.getElementById('submitTitleBtn');
let dropdownMenu = document.getElementById('dropdownMenu');
let listTitleH2 = document.getElementById('listTitleH2');
let listItemArea = document.getElementById('listItemArea');


//Check for local storage first thing on load.  Set relevant data.
let exampleData;
if (localStorage.getItem('localArrayKey')){
    console.log('Localstorage Exists and has been loaded');
    exampleData = JSON.parse(localStorage.getItem('localArrayKey'));
    populateDropDownMenu();
} else {
    console.log('Localstorage does not exist and we are starting with no data');
    exampleData = [];
}

//Total things we need
//A button to console log
//A button to delete local storage
//An input for a title
//A button to submit the title
//An H2 tag for the title
//A dropdownmenu for the titles
//An area for the list items
//Event listeners for all the buttons

//Set event listeners
consoleLogLocalBtn.addEventListener('click', function () {
    console.log(JSON.parse(localStorage.getItem('localArrayKey')));
});

deleteLocalStorage.addEventListener('click', function(){
    anakin(dropdownMenu);
    exampleData = [];
    localStorage.removeItem('localArrayKey');
    console.log(localStorage.getItem('localArrayKey'));
})

listTitleInput.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        newList();
    }
})

submitTitleBtn.addEventListener('click', function(){
    newList();
});

//Create a new object
function newList(){
    let obj = {
        title: listTitleInput.value,
        listItems: []
    }
    exampleData.push(obj);
    saveData();
    populateDropDownMenu();
    listTitleInput.value='';
}

function saveData(){
    localStorage.setItem('localArrayKey', JSON.stringify(exampleData));
}

function populateDropDownMenu(){
    anakin(dropdownMenu);
    //<a class="dropdown-item" href="#">Action</a>
    exampleData.forEach(element => {
        let a = document.createElement('a');
        a.setAttribute('class', 'dropdown-item');
        a.setAttribute('href', '#');
        a.innerText = element.title;
        a.addEventListener('click', function(e){
            console.log(e);
            checkListTitle(e.toElement.innerText)
        })
        dropdownMenu.appendChild(a);
    });
}

function checkListTitle(string){
    for (let i = 0; i < exampleData.length; i++){
        if (exampleData[i].title === string){
            loadList(exampleData[i].title, exampleData[i].listItems, i);
        }
    }
}

function loadList(title, arr, index){
    //clear list
    //create a p tag for every list item
    //add event listeners to every p tag to delete them.
    //create a input tag to add to list
    anakin(listItemArea);
    listTitleH2.innerText = title;
    populateListItems(arr);

    let listItemsInput = document.getElementById('listItemsInput');
    listItemsInput.addEventListener('keypress', function(e){
        if (e.keyCode === 13){
            exampleData[index].listItems.push(e.target.value);
            saveData();
            populateListItems(exampleData[index].listItems);
            listItemsInput.value = '';
        }
    });
}

function populateListItems(arr) {
    anakin(listItemArea);
    arr.forEach(element => {
        let p = document.createElement('p');
        p.innerText = element;
        p.addEventListener('click', function(){
            this.remove();
        })
        listItemArea.appendChild(p);
    });
}

//Kill children.
function anakin(chamber) {
    while (chamber.firstChild) {
        chamber.removeChild(chamber.firstChild);
    }
}   
