let formGenerateBtn = document.getElementById('formGenerateBtn');

formGenerateBtn.addEventListener('click', async function() {
    let formArea = document.getElementById('formArea');

    let form = document.createElement('form');

    let formRow = document.createElement('div');
    formRow.setAttribute('class', 'form-row');

    let formGroup = document.createElement('div');
    formGroup.setAttribute('class', 'form-group');

    let div = document.createElement('div');

    let input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    let label = document.createElement('label');

    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let select = document.createElement('select');

    //FIRST FORM ROW
    // <div class="form-group col-md-6">
    //     <label for="inputEmail4">Email</label>
    //     <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    // </div>
    // <div class="form-group col-md-6">
    //     <label for="inputPassword4">Password</label>
    //     <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    // </div>

    div.setAttribute('class', 'form-group col-md-6');
    label.setAttribute('for', 'inputEmail4');
    label.innerText = 'Email';
    input.setAttribute('type', 'email');
    input.setAttribute('id', 'inputEmail4');
    input.setAttribute('placeholder', 'Email');

    div.appendChild(label);
    div.appendChild(input);
    console.log(div);
    formRow.appendChild(div);
    console.log(formRow);
    //div.innerHTML = '';
    console.log(formRow);
    label.setAttribute('for', 'inputPassword4');
    label.innerText = 'Password';
    input.setAttribute('type', 'password');
    input.setAttribute('id', 'inputPassword4');
    input.setAttribute('placeholder', 'Password');

    div.appendChild(label);
    div.appendChild(input);
    formRow.appendChild(div);
    //div.innerHTML = ''
    form.appendChild(formRow);
    //formRow.innerHTML = '';

    //TWO FORMGROUPS
    // <div class="form-group">
    //         <label for="inputAddress">Address</label>
    //         <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
    // </div>
    // <div class="form-group">
    //     <label for="inputAddress2">Address 2</label>
    //     <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
    // </div>

    label.setAttribute('for', 'inputAddress');
    label.innerText = 'Address';
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'inputAddress');
    input.setAttribute('placeholder', '1234 Main St');

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    form.appendChild(formGroup);
    //formGroup.innerHTML = '';

    label.setAttribute('for', 'inputAddress2');
    label.innerText = 'Address 2';
    input.setAttribute('id', 'inputAddress2');
    input.setAttribute('placeholder', 'Apartment, studio, or floor');

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    form.appendChild(formGroup);
    //formGroup.innerHTML = '';

    //SECOND FORM ROW
    // <div class="form-row">
    //     <div class="form-group col-md-6">
    //         <label for="inputCity">City</label>
    //         <input type="text" class="form-control" id="inputCity">
    //     </div>
    //     <div class="form-group col-md-4">
    //         <label for="inputState">State</label>
    //         <select id="inputState" class="form-control">
    //             <option selected>Choose...</option>
    //             <option>...</option>
    //         </select>
    //     </div>
    //     <div class="form-group col-md-2">
    //         <label for="inputZip">Zip</label>
    //         <input type="text" class="form-control" id="inputZip">
    //     </div>
    // </div>

    div.setAttribute('class', 'form-group col-md-6');
    label.setAttribute('for', 'inputCity');
    label.innerText = 'City';
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'inputCity');
    input.setAttribute('placeholder', '');

    div.appendChild(label);
    div.appendChild(input);

    formRow.appendChild(div);
    //div.innerHTML = '';

    div.setAttribute('class', 'form-group col-md-4');
    label.setAttribute('for', 'inputState');
    label.innerText = 'State';
    select.setAttribute('id', 'inputState');
    select.setAttribute('class', 'form-control');
    option1.selected;
    option1.innerText = 'Choose...';
    option2.innerText = '...';

    select.appendChild(option1);
    select.appendChild(option2);
    div.appendChild(label);
    div.appendChild(select);

    formRow.appendChild(div);
    //div.innerHTML = '';

    div.setAttribute('class', 'form-group col-md-2');
    label.setAttribute('for', 'inputZip');
    label.innerText = 'Zip';
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'inputZip');
    input.setAttribute('placeholder', '');

    div.appendChild(label);
    div.appendChild(input)

    formRow.appendChild(div);
    //div.innerHTML = '';

    form.appendChild(formRow);
    //formRow.innerHTML = '';

    //LAST FORM GROUP
    // <div class="form-group">
    //     <div class="form-check">
    //         <input class="form-check-input" type="checkbox" id="gridCheck">
    //         <label class="form-check-label" for="gridCheck">
    //             Check me out
    //         </label>
    //     </div>
    // </div>

    div.setAttribute('class', 'form-check');
    input.setAttribute('class', 'form-check-input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'gridCheck');
    input.setAttribute('placeholder', '');
    label.setAttribute('class', 'form-check-label');
    label.setAttribute('for', 'gridCheck');
    label.innerText = 'Check me out';

    div.appendChild(input);
    div.appendChild(label);
    formGroup.appendChild(div);
    form.appendChild(formGroup);

    //And a fucking button.
    //<button type="submit" class="btn btn-primary">Sign in</button>
    let button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.setAttribute('class', 'btn btn-primary');
    button.innerText = 'Sign in';
    form.appendChild(button);

    //last step
    formArea.appendChild(form);


});