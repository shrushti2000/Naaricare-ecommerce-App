import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
    return (
        <>
            <form class="form-container">
                <h5 class="sub-heading">Signup</h5>
                <div class="form-group flex-vt">
                    <label for="name-input" class="form-label form-field-required">Name</label>
                    <input type="text" id="name-input" class="form-control" placeholder="enter name" required />
                </div>
                <div class="form-group flex-vt">
                    <label for="name-input" class="form-label form-field-required">Surname</label>
                    <input type="text" id="name-input" class="form-control" placeholder="enter name" required />
                </div>
                <div class="form-group flex-vt">
                    <label for="email-input" class="form-label form-field-required">Email</label>
                    <input type="email" id="email-input" class="form-control" placeholder="abc@gmail.com" required />
                    <small class="form-text text-mutated">We will never share your email with anyone.</small>
                </div>
                <div class="form-group flex-vt">
                    <label for="password-input" class="form-label form-field-required">Password</label>
                    <input type="password" id="password-input" class="form-control" placeholder="enter password" />
                </div>

                <button class="btn btn-primary">Submit</button>
                <Link to="/signin" className="links text-link">Already have an account?</Link>
            </form>
        </>
    )
}

export default Signup