import React, { useState } from 'react';
import './App.css'




/* button {
  padding: 10px 20px;
  border: none;
  background-color: #ff002f;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
} */



function ImageDisplay(props) {
  return (
    <div className="image-container">
      <img src={props.imageSource} alt="image" />
    </div>
  );
}


function ChangePicButton(props) {
  return (
    <button onClick={props.onClick}>Change Pic</button>
  );
}


function App() {
  const [imageSource, setImageSource] = useState('https://picsum.photos/id/337/500/500');

  function handleChangePic() {
    if(imageSource == 'https://picsum.photos/id/337/500/500'){
    setImageSource('https://picsum.photos/500/500');
  }else{
    setImageSource('https://picsum.photos/id/337/500/500'); 
  }
  }


      
      


  return (
    <div className="container">
      <div><ImageDisplay imageSource={imageSource} /></div>
      <div><ChangePicButton onClick={handleChangePic} /></div>
    </div>
  );
}

export default App;