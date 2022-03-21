import React from 'react'
import './Signin.css'

const Signin = () => {
    return (
        <>
            <form class="form-container">
                <h5 class="sub-heading">Signin</h5>
                <div class="form-group flex-vt">
                    <label for="email-input" class="form-label form-field-required">Email</label>
                    <input type="email" id="email-input" class="form-control" placeholder="abc@gmail.com" required />
                </div>
                <div class="form-group flex-vt">
                    <label for="password-input" class="form-label form-field-required">Password</label>
                    <input type="password" id="password-input" class="form-control" placeholder="enter password" />
                </div>
                <h5 class="text forgot-pw-text">Forgot Password?</h5>
                <label class="terms-condt-checkbox"> <input type="checkbox" />Remember me</label>
                <button class="btn btn-primary">Submit</button>
                <a href="../signup/signup.html" class="text-link">Create new Account</a>
            </form>
        </>
    )
}

export default Signin