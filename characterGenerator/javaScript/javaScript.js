console.log(plainStatRolls());

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