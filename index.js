



// login database array thing

let database_array = [];

let event_thing = document.getElementsByClassName("btn-primary")

event_thing.addEventListener("click", add_to_database());

document.getElementById("exampleDropdownFormEmail1").innerHTML =  login;

document.getElementById("exampleDropdownFormPassword1").innerHTML = password;

function add_to_database(login, password) {
    database_array.push([login, password]);
    console.log('added stuff to database');
};













