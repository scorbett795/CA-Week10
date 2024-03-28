let id = 0;

/*
Calling the submit button element with id "add" and adding
"addEventListener" to react when the button is clicked
*/
document.getElementById('add').addEventListener('click', () => {


   
/*
Calling table element with id "list" to establish
the contents of each cell with the value of each form
being called by their ids
*/
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-name').value;
    row.insertCell(1).innerHTML = document.getElementById('new-age').value;
    row.insertCell(2).innerHTML = document.getElementById('new-feet').value + " ft";
    row.insertCell(3).innerHTML = document.getElementById('new-inches').value + " in";
    row.insertCell(4).innerHTML = document.getElementById('new-weight').value + " lbs";
    row.insertCell(5).innerHTML = document.getElementById('new-rival').value;
    row.insertCell(6).innerHTML = document.getElementById('new-finisher').value;
   


/*
Setting forms values to '' to clear text boxes 
after clicking submit
*/
    document.getElementById('new-name').value = '';
    document.getElementById('new-age').value = '';
    document.getElementById('new-feet').value = '';
    document.getElementById('new-inches').value = '';
    document.getElementById('new-weight').value = '';
    document.getElementById('new-rival').value = '';
    document.getElementById('new-finisher').value = '';

});