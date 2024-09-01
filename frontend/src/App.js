import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './Pages/Home.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Blogs } from './Pages/Blogs/Blogs.jsx';
import { About } from './Pages/About.jsx';

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
          element={<Blogs/>}
          />
          <Route
          path='/about'
          element={<About/>}
          />
          
        </Routes>

      </div>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
