import React from 'react'
import "./Sidebar.css";

import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
// import CabinIcon from '@mui/icons-material/Cabin';
import ExploreIcon from '@mui/icons-material/Explore';
import CampaignIcon from '@mui/icons-material/Campaign';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { button} from '@material-ui/core'

export default function Sidebar() {
  return (
    <div className='sidebar'> 
    {/* Twitter icon */}
    <TwitterIcon className='sidebar_twitte' />
      <SidebarOption Icon = {ExploreIcon} text = "Explore"/>
      <SidebarOption  Icon = {CampaignIcon} text = "Notification"/>
    <SidebarOption Icon = {MailOutlineIcon} text = "Mail" />
   <SidebarOption Icon = {BookmarkBorderIcon}  text = "Bookmark" />
   <SidebarOption Icon = {ListAltIcon}  text = "List" />
   <SidebarOption Icon = {PermIdentityIcon}  text = "Profile" />
   <SidebarOption Icon = {MoreHorizIcon}  text = "More" />
   <button variant='outLined' className='sidebar_tweet'>Tweet</button>

    
    
    </div>
  )
}
