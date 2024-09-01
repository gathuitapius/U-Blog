import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.sass'
export const Navbar = () => {
    return <div className="navbar">
    <div className="logo">
        U-Blog
    </div>
    <div className="links">
        <ul>
            <li>Home</li>
            <li>Blogs</li>
            <li>About Us</li>
        </ul>
    </div>
    <div className="userprofile">
        Hello, User
    </div>
    </div>
}