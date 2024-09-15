import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './Pages/Home.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Blogs } from './Pages/Blogs/Blogs.jsx';
import { About } from './Pages/About/About.jsx';
import Blog from './Pages/BlogPage/Blog.jsx';
import { Login } from './Pages/Auth/Login/Login.jsx';
import { SignUp } from './Pages/Auth/signup/signUp.jsx';
import  ProtectedRoute from './components/ProtectedRoute.jsx';

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
            <ProtectedRoute>
              <Blogs/>
            </ProtectedRoute>
        }
          />
          <Route
          path='/about'
          element={<About/>}
          />
          <Route
          path='/blog'
          element={
            <ProtectedRoute>
              <Blog/>
            </ProtectedRoute>
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
          
          
        </Routes>

      </div>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
