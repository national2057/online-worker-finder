import './App.css';
import { StickyNavbar } from './components/Navbar';
import Home from './Dashboard/Home';

const App = () => {
  return (
    <div>
      <div className='bg-slate-600'>
        <StickyNavbar />
      </div>
      <Home />
    </div>
  )
}

export default App;