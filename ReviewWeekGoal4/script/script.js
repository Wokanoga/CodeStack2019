let goBtn = document.getElementById('goBtn');

goBtn.addEventListener('click', function(e){
    let elementArea = document.getElementById('elementArea');
    elementArea.innerHTML = '';
    let rowNum = document.getElementById('rowNum').value;
    let colNum = document.getElementById('colNum').value;
    let pTagNum = document.getElementById('pTagNum').value;

    for (let r = 0; r < rowNum; r++){
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let c = 0; c < colNum; c++){
            let col = document.createElement('div');
            col.setAttribute('class', 'col');
            for (let p = 0; p < pTagNum; p++){
                let pTag = document.createElement('p');
                pTag.innerText = 'Text';
                col.appendChild(pTag);
            }
            row.appendChild(col);
        }
        elementArea.appendChild(row);
    }
})