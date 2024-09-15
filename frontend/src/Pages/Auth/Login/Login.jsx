import { Link, useNavigate } from "react-router-dom"
import "./login.sass"
import { useState } from "react"
import axios from "axios"


export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        try {
    
        const response = await axios.post('/api/auth/login', {email, password});

        // Save token in localStorage
        localStorage.setItem("token", response.data.token);

        // Redirect to home page
        navigate('/')

    } catch (error) {
        setError(error.response?.data?.message || "Login failed");
    }



    }
    return(
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="input">
                <label>Email</label>
                <input type="email" 
                required 
                placeholder="Enter your Email ..."
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </div>
            <div className="input">
                <label>Password</label>
                <input type="password" 
                required 
                placeholder="Enter password ..."
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </div>
            <div className="input">
                <button type="submit">Login</button>
            </div>
            <div className="signup-link">
                <p>If dont have an Account? <Link to="/signup">Create Account</Link></p>
            </div>
            {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}