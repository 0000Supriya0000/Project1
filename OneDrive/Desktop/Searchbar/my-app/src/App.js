import React from 'react';
import './App.css';
import SearchBox from './component/SearchBox';
import BookData from "./Data.json"
function App() {
  return (
    <SearchBox placeholder="enter name..."  data = {BookData} />
  );
}

export default App;
