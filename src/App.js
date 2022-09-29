// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Students from './components/Students';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div>
            <ul className="navbar">
              <li>
                <Link to='/' className='text-normal'>Home</Link>
              </li>
              <li>
              <Link to='/students' className='text-normal'>Students</Link>
              </li>
              <li>
              <Link to='/contactUs' className='text-normal'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <Routes>
              <Route path='/' element={<Home />} ></Route>
              <Route path='/students' element={<Students />} ></Route>
              <Route path='/contactUs' element={<ContactUs />} ></Route>
              <Route path='/desc/:stuNum' element={<Edit />} ></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
