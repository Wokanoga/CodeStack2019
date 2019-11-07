let questionArray = ['1','1','1','1','1','1','1','1','1','1','1','1'];

let randomNumbers = [];

while (randomNumbers.length != questionArray.length){
    let rNum = Math.floor(Math.random() * questionArray.length+1);
    if (randomNumbers.includes(rNum)){
        continue;
    } else {
        randomNumbers.push(rNum);
    }
}

setTimeout(() => {
   console.log(randomNumbers); 
}, 100);