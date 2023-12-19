import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Student from './student';
import Createstudent from './createstudent';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Updatestudent from './updatestudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Student/>}></Route>
          <Route path ='/create' element={<Createstudent/>}></Route>
          <Route path ='/update/:id' element={<Updatestudent/>}></Route>
        </Routes>
      </BrowserRouter>
     
      
    </div>
    
  );
}

export default App;
