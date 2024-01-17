
const registrationForm = document.getElementById('container');
const message = document.getElementById('message');



registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

     

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.getElementById('gender').value;
   

  
   

    if (password !== confirmPassword) 
    {
        message.innerText = 'Passwords do not match. Please try again.';
        return; 
    }
    
    

   


            // Perform registration logic here, e.g., sending data to a server.
    
            // Display a success message
    message.innerText = 'Registration successful!';

    window.location.href="http://127.0.0.1:5500/login.html";

    console.log(e)     // Optionally, redirect to a login page.
    alert(" Your Registration succesfully completed \"Please Login to our Website\" ")

    const myObjectString = JSON.stringify(username);
    const myObjectString2=JSON.stringify(confirmPassword);
    localStorage.setItem('userData', myObjectString);
    localStorage.setItem('userData1',myObjectString2)
});





/*

const registrationForm = document.getElementById('container');
const message = document.getElementById('message');

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) 
    {
        message.innerText = 'Passwords do not match. Please try again.';
        return;
    }

            // Perform registration logic here, e.g., sending data to a server.
    
            // Display a success message
    message.innerText = 'Registration successful!';

    window.location.href="http://127.0.0.1:5500/login_pagr/main.html";

    console.log(e)     // Optionally, redirect to a login page.
});
*/