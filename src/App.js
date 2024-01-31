import { Route, Routes } from 'react-router';
import './App.css';
import { StickyNavbar } from './components/Navbar';
import Home from './Dashboard/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/auth_page/Login';
import Register from './pages/auth_page/Register';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <div className='bg-slate-600'>
        <StickyNavbar />
      </div>
      {/* <Home /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />

        {/* <Route>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route> */}
      </Routes>

      <Footer />

    </div>
  )
}

export default App;