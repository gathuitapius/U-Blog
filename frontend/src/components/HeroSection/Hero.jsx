import './Hero.sass'
import { useNavigate, Link } from 'react-router-dom'
import image from "../assets/blogimg.png"
export const Hero = () => {
    const navigate = useNavigate();
    return <div className="hero">
        <div className="left">
            <h3>Discover, Learn, and Be Inspired</h3>
            <p>Join us on a journey of exploration and insight.<br/>
                From expert tips to inspiring stories, find the <br/>
                content that sparks your curiosity and fuels your <br/>
                passion</p>

            <button>Get started</button>
            <div className="auth">
                <button><Link to="/login">Login</Link></button>
                <button><Link to="/signup">Sign Up</Link></button>
            </div>
        </div>
        <div className="right">
    <img src={image} alt="Blog"/>
</div>

    </div>
}