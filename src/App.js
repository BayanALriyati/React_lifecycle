import React from 'react';
import Header from './Components/Header';
import Task1 from './Components/Task1';
import Task2 from './Components/Task2';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
     return(
      <div>
        <Header />
        <Task1 />
        <Task2 />
      </div>
     );
  }


export default App;