// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.sass'
import {Link} from "react-router-dom"

//icons
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';


export const Navbar = () => {
    return <div className="navbar">
    <div className="logo">
        <LibraryBooksRoundedIcon className='logoIcon'/>
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
        <AccountCircleRoundedIcon className='avater'/>
        <h3>Hello, User</h3>
    </div>
  
    </div>
}