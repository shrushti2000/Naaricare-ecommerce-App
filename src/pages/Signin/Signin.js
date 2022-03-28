import axios from 'axios'
import React from 'react'
import { useContext, useState } from 'react'
import './Signin.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
const Signin = () => {
    const { token, setToken, user, setUser } = useContext(AuthContext)
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ')
    const testCredentials={
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
    }
    let navigate = useNavigate();
    const signinHandler = async (e) => {
        e.preventDefault()
        try {
            const {
                data: { foundUser, encodedToken },
                status,
            } = await axios.post('/api/auth/login', {email,password});
            if (status === 200) {
                localStorage.setItem(
                    "login",
                    JSON.stringify({ token: encodedToken })
                );
                setToken(encodedToken);
                localStorage.setItem("user", JSON.stringify({ user: foundUser }));
                setUser(foundUser);
                console.log(foundUser)
              navigate('/productlistingpage')
            }
        } catch (error) {
            console.log("Error in login user", error);
        }
    }
    return (
        <>
            <form class="form-container">
                <h5 class="sub-heading">Signin</h5>
                <div class="form-group flex-vt">
                    <label for="email-input" class="form-label form-field-required" >Email</label>
                    <input type="email" id="email-input" class="form-control" placeholder="abc@gmail.com" required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="form-group flex-vt">
                    <label for="password-input" class="form-label form-field-required" >Password</label>
                    <input type="password" id="password-input" class="form-control" placeholder="enter password" required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <h5 class="text forgot-pw-text">Forgot Password?</h5>
                <button class="btn btn-primary" onClick={signinHandler}>Signin</button>
                <Link to="/signup" className="links text-link">Create new Account</Link>
            </form>
        </>
    )
}
export default Signin