import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './Pages/Home.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Blogs } from './Pages/Blogs/Blogs.jsx';
import { About } from './Pages/About/About.jsx';
import {Blog} from './Pages/BlogPage/Blog.jsx';
import { Login } from './Pages/Auth/Login/Login.jsx';
import { SignUp } from './Pages/Auth/signup/signUp.jsx';
import {NewBlog} from './Pages/AddBlog/NewBlog.jsx'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <div className='pages'>
        <Routes>
          <Route 
          path='/'
          element={<Home/>}
          />
          <Route
          path='/blogs'
          element={
              <Blogs/>
        }
          />
          <Route
          path='/about'
          element={<About/>}
          />
          <Route
          path='/newblog'
          element={
              <NewBlog/>
        }
          />
          <Route
          path='/signup'
          element={<SignUp/>}
          />
          <Route
          path='/login'
          element={<Login/>}
          />
          <Route
          path='/blog/:id'
          element={<Blog/>}
          />
          
        </Routes>

      </div>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
