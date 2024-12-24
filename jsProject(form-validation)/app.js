const form = document.getElementById('myForm')


form.addEventListener('submit', function(event) {
    event.preventDefault()
    if(validateForm()){
        form.submit()
    }
    

})

function validateForm() {
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value
    const cPassword = document.getElementById('cpassword').value
    const username = document.getElementById('username').value.trim()
    const fullName = document.getElementById('fullname').value.trim()
    const checkbox = document.getElementById('checkbox').checked
    let isValid = true


    //validating the name
    if (fullName === '') {
        document.getElementById('fullnameError').innerText = 'Please Enter Your Fullname !!!'
        document.getElementById('fullnameError').style.color = 'red'
        isValid = false
    }

    //validating the username
    if (username === '') {
        document.getElementById('usernameError').innerText = 'Please Enter Your Username !!!'
        document.getElementById('usernameError').style.color = 'red'
        isValid = false
    }

    //validating the email address
    if(email === '') {
        document.getElementById('emailError').innerText = 'Please Enter Your Email !!!'
        document.getElementById('emailError').style.color = 'red'
        isValid = false
    } if(!isValidEmail(email)) {
        document.getElementById('emailError').innerText = 'Invalid Email Format!'
        document.getElementById('emailError').style.color = 'red'
    }

    //validating the password
    if (password === '') {
        document.getElementById('passwordError').innerText = 'Please Enter Your Password !!!'
        document.getElementById('passwordError').style.color = 'red'
        isValid  = false
    } else if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long'
        document.getElementById('passwordError').style.color = 'red'
        isValid = false
    }

    //validating the confirm password
    if (cPassword === '') {
        document.getElementById('cpasswordError').innerText = 'Please Confirm Your Password !!!'
        document.getElementById('cpasswordError').style.color = 'red'
        isValid = false
    }

    if(password !== cPassword) {
        document.getElementById('cpasswordError').innerText = 'Password does not match'
        document.getElementById('cpasswordError').style.color = 'red'
        isValid = false
    }

    
    // if(!checkbox.checked) {
    //     alert('Please agree to the terms and conditions')
    // }
    

    return isValid
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

