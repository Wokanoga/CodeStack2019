function getAPIData(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log(xhr.status);
        if (xhr.status === 200) {
            wInfo = JSON.parse(xhr.responseText);
            console.log(wInfo);
        } else {
            alert('Uh Oh')
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

let urlString = 'https://api.openweathermap.org/data/2.5/weather?lat=37.9109&lon=-121.2285&APPID=7f2c6812402ad81e68af50e00b070663';

let urlpt1 = "https://api.openweathermap.org/data/2.5/weather"
let lat = '?lat=37.9109';
let long = '&lon=-121.2285';
let apiKey = '&APPID=7f2c6812402ad81e68af50e00b070663'

getAPIData(urlpt1+lat+long+apiKey);