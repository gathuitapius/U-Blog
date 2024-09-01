// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.sass'
import {Link} from "react-router-dom"
export const Navbar = () => {
    return <div className="navbar">
    <div className="logo">
        <Link to="/"> U-Blog </Link>
    </div>

    <div className="links">
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>
    </div>
    <div className="userprofile">
        <h3>Hello, User</h3>
    </div>
  
    </div>
}