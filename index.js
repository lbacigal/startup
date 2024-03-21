
// document.getElementById('sign-in').onclick = function() {
//     this.disabled = true;
//     // …
// }
// * = working (I think)
// ! = not working



// * ----------------- add login info to database ----------
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

// * ------------- debug login info in console -----------
let debug_localstorage = () => {
console.log('current localStorage data ⬇️')
// Retrieve the stored data from localStorage
let storedData = localStorage.getItem('loginData');

// Parse the stored data from JSON
let loginData = JSON.parse(storedData);

// Print the contents of loginData
console.log(loginData);
}

// ! ---------------- send user to editor tab on sign in --------------
function redirectToPage() {
    // Redirect to the desired page
    window.location.href = "editor.html";
}


//* --------------- prevent click of "Sign In" until things have been entered ---------
//  Get email & password input elements
const emailInput = document.getElementById("exampleDropdownFormEmail1");
const passwordInput = document.getElementById("exampleDropdownFormPassword1");

// Get the sign-in button
const signInButton = document.getElementById("sign-in");

// Function to check if both email and password fields are filled
function checkFields() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Enable the sign-in button if both fields are filled, disable it otherwise
    if (email !== "" && password !== "") {
        signInButton.disabled = false;
    } else {
        signInButton.disabled = true;
    }
}

// Add event listeners to email and password inputs to check fields on input
emailInput.addEventListener("input", checkFields);
passwordInput.addEventListener("input", checkFields);




