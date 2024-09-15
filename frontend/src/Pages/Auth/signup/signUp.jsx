import { Link, useNavigate } from "react-router-dom"
import "./signUp.sass"
import { useState } from "react"
import axios from "axios"




export const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const[error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        const user = {userName, email, password}
        const response = await axios.post("/api/auth", user)
        // const result = await response

        if(response.status !== 200){
            setError(response.error)
        }
        if(response.status === 200)
        {
            setUserName("")
            setEmail("")
            setPassword("")
            setError(null)
            console.log(response.data)
            navigate("/login")
        }

    }
    return(
        <div className="signup">
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
            <div className="input">
                <label>Full Name</label>
                <input type="text" 
                required 
                placeholder="Enter your name ..."
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                />
            </div>
            <div className="input">
                <label>Email</label>
                <input type="text" 
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
                <button >SignUp</button>
            </div>
            <div className="signup-link">
                <p>Already have an Account? <Link to="/login">Login</Link></p>
            </div>
            </form>
        </div>
    )
}