import React from 'react'
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './leftPage/Widgets';

import Register from './register/Register';


function App() {
  return (
    <div className="app">
      
      
      <Sidebar />
      <Feed />
      <Widgets />
      <Register />
     
      
      
      
      

      {/* sidebar
      feed
      widgets */}
      
    </div>
  );
}

export default App;
