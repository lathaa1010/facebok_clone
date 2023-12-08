import React from "react";
import SidebarRow from "../SidebarRow/SidebarRow";
import "./Sidebar.css";
import {
    Chat,
    EmojiFlags,
    ExpandMoreOutlined,
    LocalHospital,
    People,
    Storefront,
    VideoLibrary,
    
} from "@mui/icons-material";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
const Sidebar=()=>{

    const user= useSelector((state)=>state.user);
    return(
        <div className="sidebar">
            <SidebarRow title={user.displayName} src={user.photoURL} />
            <SidebarRow title="COVID-19 Information Center" Icon={LocalHospital}/>
            <SidebarRow title="Pages" Icon={EmojiFlags}/>
            <SidebarRow title="Friends" Icon={People}/>
            <SidebarRow title="Messanger" Icon={Chat}/>
            <SidebarRow title="Marketplace" Icon={Storefront}/>
            <SidebarRow title="More Items" Icon={ExpandMoreOutlined}/>
            

        </div>
    )
}
export default Sidebar;