import React from 'react'
import "./Widgets.css"
import Page1 from './Page1';


import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export default function Widgets() {
  return (
    <div className="Widgets">
      <div className="widgets_input">
        <TravelExploreIcon className="width_searchicon" />
        <input placeholder='Search Twitter' type="text" />
      </div>
      <div className = "widgets_widgetsContainer">
      <h2>What's happening</h2>
      <Page1 />
    </div>
    </div>
  )
}
