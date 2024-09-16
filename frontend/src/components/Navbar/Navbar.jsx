// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.sass'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'

//icons
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import LogoutIcon from '@mui/icons-material/Logout';
// import { useState } from 'react';


export const Navbar = () => {
    const navigate = useNavigate()
    const handloLogOut = async (e) => {
        e.preventDefault()
        // localStorage.removeItem('token');
        await axios.post('/api/auth/logout')
        navigate('/login')
    }

    // const getLoggedInUser = async () =>{
    //     const user = await axios.get('/api/auth/user')
    //     setUser(user)
    // }
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
        <LogoutIcon className='logout' onClick ={handloLogOut}/>
    </div>
  
    </div>
}