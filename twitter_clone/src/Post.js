import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function Post({
    displayName,
    userName,
    verified,
    timestamp,
    text,
    avatar

}) {

  return (
    <div className="post">
        <div className="post_avar">
            <Avatar src="https://media.cntraveler.com/photos/566736286ad1fa4633ecd1e5/master/pass/chianti-tuscany-cr-getty.jpg"/>
       
                     
        </div>
        <div className="post_body">
           <div className="post_header">
            <div className="post_headerText">
                <h3>Supriya{" "} <span className='post_headerSpecial'>
                    <verifiedUserIcon className="post_badge"></verifiedUserIcon>
                    </span>
                    </h3>
            </div>
            <div className="post_headerDiscription">

                <p>Myself Supriya Pandey.</p>
            </div>
           </div>
           <img classsName = "img" width = "500px" height = "200px" src="https://1.bp.blogspot.com/-oUD5FCtwZmE/X6lW73q1UsI/AAAAAAABv6k/B3cgTWZnemgrM8SiYRwjdej_wK_26nMgACNcBGAsYHQ/s16000/Vineyards%2Bnear%2BBarolo%252C%2BPiedmont%252C%2BItaly.jpg" 
           
           alt="nature_image" /><br></br>
           <br></br>
           <video width="400px" height="500px"
        controls="controls"/>
         
        <source src="https://www.youtube.com/watch?v=CAc4-mB5usc&list=RDCAc4-mB5usc&start_radio=1"
            type="video"/>
    

<div className="post_footer">
    <ChatBubbleOutlineIcon fontSize = "small" />
    <ReplayCircleFilledIcon fontSize = "small" />
    <FavoriteBorderIcon fontSize = "small" />
    <CloudUploadIcon fontSize="small"  />
    <CloudDownloadIcon fontSize="small" />
    

</div>
        </div>

        </div>
  )
}
