import React from 'react'
import "./TweetBox.css"
import { Avatar, Button} from "@material-ui/core"


export default function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox_input">
            <Avatar alt="Nature" src="https://th.bing.com/th/id/R.2cc6405af6ac68063084ce97972c985f?rik=mG%2bThajjlg51wA&riu=http%3a%2f%2fi.imgur.com%2fJ2qpU4s.jpg&ehk=kdUaSw%2brk4cBzWejGp5%2fa309162Mqql4TLMvguZQmrU%3d&risl=&pid=ImgRaw&r=0" />
<input placeholder="What's happening?" type="text" />
<br></br>
<br></br>
<input className = "tb" placeholder="Enter image URL" type="text" />


            </div>
            <Button  className = "tweetBox_Button">Tweet</Button>
        </form>



    </div>
  )
}
