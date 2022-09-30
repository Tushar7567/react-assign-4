import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Students from './components/Students';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Edit from './components/Edit';
import Ads from './components/Ads';
import {useState} from 'react';

function App() {
  // let [{name, age, course, batch}, {setName, setAge, setCourse, setBatch}] = useState(''); 
  let [name, setName] = useState('');
  let [age, setAge] = useState('');
  let [course, setCourse] = useState('');
  let [batch, setBatch] = useState('');

  let [sArr, setsArr] = useState([{name:'John', age:'24', course:'MERN', batch:'October'},
  {name:'Doe', age:'25', course:'MERN', batch:'November'},
  {name:'Zelensky', age:'41', course:'MERN', batch:'December'},
  {name:'Putin', age:'58', course:'MERN', batch:'May'},
  {name:'Biden', age:'69', course:'MERN', batch:'April'}]);


  const handleUpdateName = (e,i) =>{
    setName(e.target.value);
    const updatedSArr = [...sArr];
    let currentArr = updatedSArr[i];
    currentArr = {name: e.target.value, age: currentArr.age, course: currentArr.course, batch: currentArr.batch}
    updatedSArr[i] = currentArr;
    setsArr(updatedSArr);
    console.log(sArr[i]);
  }
  const handleUpdateAge = (e,i) =>{
    setAge(e.target.value);
    const updatedSArr = [...sArr];
    let currentArr = updatedSArr[i];
    currentArr = {name: currentArr.name, age: e.target.value , course: currentArr.course, batch: currentArr.batch}
    updatedSArr[i] = currentArr;
    setsArr(updatedSArr);
    console.log(sArr[i]);

  }
  const handleUpdateCourse = (e,i) =>{
    setCourse(e.target.value);
    const updatedSArr = [...sArr];
    let currentArr = updatedSArr[i];
    currentArr = {name: currentArr.name, age: currentArr.age, course: e.target.value, batch: currentArr.batch}
    updatedSArr[i] = currentArr;
    setsArr(updatedSArr);
    console.log(sArr[i]);

  }
  const handleUpdateBatch = (e,i) =>{
    setBatch(e.target.value);
    const updatedSArr = [...sArr];
    let currentArr = updatedSArr[i];
    currentArr = {name: currentArr.name, age: currentArr.age, course: currentArr.course, batch: e.target.value }
    updatedSArr[i] = currentArr;
    setsArr( updatedSArr);
    console.log(sArr[i]);
  }
 
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
              <Route path='/students' element={<Students sArr={sArr}   />} ></Route>
              <Route path='/desc/:index' element={<Edit sArr={sArr}   handleUpdateName={handleUpdateName} handleUpdateAge={handleUpdateAge} handleUpdateCourse={handleUpdateCourse} handleUpdateBatch={handleUpdateBatch} />} ></Route>
              <Route path='/contactUs' element={<ContactUs />} ></Route>
              <Route path='/addnew' element={<Ads sArr={sArr}  name={name} age={age} course={course} batch={batch} setName={setName} setAge={setAge} setCourse={setCourse} setBatch={setBatch} setsArr={setsArr}  />} ></Route>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
