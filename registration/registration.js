let register = document.getElementById('submit-btn');

register.addEventListener('click', e => {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let region = document.getElementById('region').value;
    let date = document.getElementById('date').value;

    if(username === '') {
        alert('Please fill your username !');
    }

    else if(username.length <= 8) {
        alert('Username too short !');
    }

    else if(email === '') {
        alert('Please fill your E-mail !');
    }
    // no @
    else if(email.indexOf("@") === -1) {
        alert('Incorrect E-mail format !');
    }
    // no .
    else if(email.indexOf(".") === -1) {
        alert('Incorrect E-mail format !');
    }
    // @.
    else if(email[email.indexOf("@") + 1] === ".") {
        alert('Incorrect E-mail format !');
    }
    //@@
    else if(email[email.indexOf("@") + 1] === "@") {
        alert('Incorrect E-mail format !');
    }
    //ada spasi
    else if(email.indexOf(" ") !== -1) {
        alert('Incorrect E-mail format !');
    }
    //ada ..
    else if(email.indexOf("..") !== -1) {
        alert('Incorrect E-mail format !');
    }

    else if(password === '') {
        alert('Please fill your password !');
    }

    else if(password.length < 8) {
        alert('Password is too short !');
    }

    else if(region === '') {
        alert('Please choose your region !');
    }

    else if(date === '') {
        alert('Please fill your date of birth !');
    }

    else {
        alert("Registration Success !!");
    }
});
