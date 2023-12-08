import React from "react";
import { Avatar } from "@mui/material";
import "./Story.css";
import StoryReel from "../StoryReel/StoryReel";

const Story=({image, profileSrc, title})=>{
    return(
        <div className="story" style={{backgroundImage:`url(${image})`}}>
            <Avatar src={profileSrc} className="story_avatar" />
            <h4>{title}</h4>

        </div>
    );
};

export default Story;