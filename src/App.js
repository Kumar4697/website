import React  from 'react';
import jsonComp from './Fcomponent/jsonComp';
import './App.css';
import Greet from './Fcomponent/Greet';

function App() {
  const json = [{
    id: "111",
    image:""
  }
  {
    id: "112",
    image:""
  }]
  return (
    <div className="App">
      <p>heyyyy</p>
     <jsonComp />
     <Greet />
    </div>
  );
}

export default App;
