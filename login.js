/*const users={
    user1:'123',
    user2:'234',
    user3:'345',
    user4:'456'
};
*/
const myObjectString3 = localStorage.getItem('userData');
const myObjectString4 =localStorage.getItem('userData1');
const users = JSON.parse(myObjectString3);
const pass =JSON.parse(myObjectString4);



document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered username exists in the 'users' object
    if (users === username) {
        if (pass === password) {
            
            document.getElementById('message').innerText = 'Login successful.';
            alert("Login successful Welcome to our website "+username)
            
            window.location.href="https://www.w3schools.com/cssref/pr_text_text-transform.php"
            // Redirect to the user's dashboard or homepage.
        } else {
            document.getElementById('message').innerText = 'Invalid password. Please try again.';
        }
    } else {
        document.getElementById('message').innerText = 'Username not found. Please try again.';
    }
});



/*
const users={
    user1:'123',
    user2:'234',
    user3:'345',
    user4:'456'
};

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered username exists in the 'users' object
    if (users.hasOwnProperty(username)) {
        if (users[username] === password) {
            document.getElementById('message').innerText = 'Login successful.';
            window.location.href="https://www.w3schools.com/cssref/pr_text_text-transform.php"
            // Redirect to the user's dashboard or homepage.
        } else {
            document.getElementById('message').innerText = 'Invalid password. Please try again.';
        }
    } else {
        document.getElementById('message').innerText = 'Username not found. Please try again.';
    }
});
*/