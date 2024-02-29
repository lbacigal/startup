
// document.getElementById('sign-in').onclick = function() {
//     this.disabled = true;
//     // …
// }

let database_array = [];

let add_to_database=() => {
    let login_info = document.getElementById("exampleDropdownFormEmail1").value;

    let password = document.getElementById("exampleDropdownFormPassword1").value;

    database_array.push({"username":login_info, "password":password});

    console.log('added stuff to database');
    console.log(database_array);

};

document.getElementById('sign-in').onclick = function() {
    this.disabled = true;
    add_to_database();
}

// login database array thing



