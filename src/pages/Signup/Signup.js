import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    let navigate = useNavigate();
    const signupHandler = async (e) => {
       e.preventDefault();
        try {
          const response = await axios.post(`/api/auth/signup`, {
            firstName,
            lastName,
            email,
            password,
          })
          console.log(response)
           if(response.status===201){
            navigate('/signin')
          
          }
         } catch (error) {
          console.log(error);
        }
      };
    return (
        <>
            <form class="form-container">
                <h5 class="sub-heading">Signup</h5>
                <div class="form-group flex-vt">
                    <label for="name-input" class="form-label form-field-required">Name</label>
                    <input type="text" id="name-input" class="form-control" placeholder="enter name" required onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div class="form-group flex-vt">
                    <label for="name-input" class="form-label form-field-required" >Surname</label>
                    <input type="text" id="name-input" class="form-control" placeholder="enter name" required onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div class="form-group flex-vt">
                    <label for="email-input" class="form-label form-field-required" >Email</label>
                    <input type="email" id="email-input" class="form-control" placeholder="abc@gmail.com" required onChange={(e)=>setEmail(e.target.value)}/>
                    <small class="form-text text-mutated">We will never share your email with anyone.</small>
                </div>
                <div class="form-group flex-vt">
                    <label for="password-input" class="form-label form-field-required" >Password</label>
                    <input type="password" id="password-input" class="form-control" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <label class="terms-condt-checkbox"> <input type="checkbox" />I accept all terms and conditions</label>
                <button class="btn btn-primary" onClick={signupHandler}>Submit</button>
                <a href="../signin/signin.html" class="text-link">Already have an account?</a>
            </form>
        </>
    )
}

export default Signup