import React, { useState } from "react";
import{
    Add,
    ExpandMore,
    Flag,
    Forum,
    Home,
    NotificationsActive,
    Search,
    StorefrontOutlined,
    SubscriptionsOutlined,
    SupervisedUserCircle,
} from "@mui/icons-material";

import { IconButton, Avatar } from "@mui/material";
import "../Header/Header.css";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Header=()=>{

    const user=useSelector((state)=>state.user);
    const [headerOperation, setHeaderOperation] = useState('home')
    return(
        <div className="header">
            <div className="header_left">
                <img src="https://imgs.search.brave.com/JzDzERSkKvBXmuaqTA_yjiicZkSmNwYLPxwVJRIy_PU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I4LzIwMjFfRmFj/ZWJvb2tfaWNvbi5z/dmc.svg" alt="">
                </img>

                <div className="header_input">
                    <Search>
                        <input type="text" placeholder="Search Facebook"/>
                    </Search>

                </div>

            </div>

            <div className="header_center">
                <div
                 className={`header_option ${headerOperation==="home" ? "header_option---active":null}`}
                 onClick={()=>setHeaderOperation('home')}>
                    
                    <Home fontSize="large"/>
                </div>
                <div className={`header_option ${headerOperation==="flag" ? "header_option---active":null}`}
                onClick={()=>setHeaderOperation('flag')}>
                    <Flag fontSize="large"/>
                </div>
                <div className={`header_option ${headerOperation==="subs" ? "header_option---active":null}`}
                onClick={()=>setHeaderOperation('home')}>
                    <SubscriptionsOutlined fontSize="subs"/>
                </div>
                <div className={`header_option ${headerOperation==="store" ? "header_option---active":null}`}
                onClick={()=>setHeaderOperation('store')}>
                    <StorefrontOutlined fontSize="large"/>
                </div>
                <div className={`header_option ${headerOperation==="user" ? "header_option---active":null}`}
                onClick={()=>setHeaderOperation('user')}>
                    <SupervisedUserCircle fontSize="large"/>
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <Add />
                </IconButton>
                <IconButton>
                    <Forum/>
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore/>
                </IconButton>


            
            </div>

        </div>
    )
}

export default Header;