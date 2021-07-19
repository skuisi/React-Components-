import React from 'react';


import Photo from './Component/Profile/ProfilePhoto';
import Name from './Component/Profile/FullName';
import Address from './Component/Profile/Address';


import './App.css';

function App() {
  return (
    <div className="App">


      <Photo />
      <Name />
      <Address />

    </div>
  );
}

export default App;