
// document.getElementById('sign-in').onclick = function() {
//     this.disabled = true;
//     // …
// }

let database_array = [];

let add_to_database=() => {
    let login_info = document.getElementById("exampleDropdownFormEmail1").value;
    let password = document.getElementById("exampleDropdownFormPassword1").value;

    // put login & password together in array
    database_array.push({"username":login_info, "password":password});

    // put login array in localStorage
    localStorage.setItem('loginData', JSON.stringify(database_array));

    console.log('added stuff to database');
    console.log(database_array);

    debug_localstorage();

    // display username on page
    document.getElementById("username-placeholder").textContent = login_info;
};

document.getElementById('sign-in').onclick = function() {
    this.disabled = true;
    add_to_database();
}

let debug_localstorage = () => {
console.log('current localStorage data ⬇️')
// Retrieve the stored data from localStorage
let storedData = localStorage.getItem('loginData');

// Parse the stored data from JSON
let loginData = JSON.parse(storedData);

// Print the contents of loginData
console.log(loginData);
}




