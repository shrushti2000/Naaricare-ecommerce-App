import React from 'react'
import './Signup.css';

const Signup = () => {
  return (
    <>
     <form class="form-container">
        <h5 class="sub-heading">Signup</h5>
        <div class="form-group flex-vt">
            <label for="email-input" class="form-label form-field-required">Email</label>
            <input type="email" id="email-input" class="form-control" placeholder="abc@gmail.com" required />
            <small class="form-text text-mutated">We will never share your email with anyone.</small>
        </div>
        <div class="form-group flex-vt">
            <label for="password-input" class="form-label form-field-required">Password</label>
            <input type="password" id="password-input" class="form-control" placeholder="enter password" />
        </div>
        <label class="terms-condt-checkbox"> <input type="checkbox" />I accept all terms and conditions</label>
        <button class="btn btn-primary">Submit</button>
        <a href="../signin/signin.html" class="text-link">Already have an account?</a>
    </form>
    </>
  )
}

export default Signup