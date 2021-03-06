let goBtn = document.getElementById('goBtn');
let counter = 0;
let elementArea = document.getElementById('elementArea');
let pTag = document.createElement('p')

goBtn.addEventListener('click', function (e) {
    elementArea.innerHTML = '';
    let rowNum = document.getElementById('rowNum').value;
    let colNum = document.getElementById('colNum').value;
    let pTagNum = document.getElementById('pTagNum').value;

    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let c = 0; c < colNum; c++) {
            let col = document.createElement('div');
            col.setAttribute('class', 'col');
            for (let p = 0; p < pTagNum; p++) {
                let pTag = document.createElement('p');
                pTag.innerText = `R${r} C${c} P${p}`;
                pTag.setAttribute('id', `pTag${counter}`)
                counter++;
                col.appendChild(pTag);
            }
            row.appendChild(col);
        }
        elementArea.appendChild(row);
    }
})