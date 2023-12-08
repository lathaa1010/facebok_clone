import React, { useEffect, useState } from "react";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import {db, timestamp} from "../../firebase";
import Post from "../Post/Post";
import "../Feed/Feed.css";

const Feed=()=>{
    const [posts, setPosts]=useState([]);

    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapShot)=>{
            setPosts(
            snapShot.docs.map((doc)=>{
                return{
                    id:doc.id,
                    data:doc.data()
                }
                // console.log(doc.id, doc.data())
            }));
            console.log(posts);
            
        });
    },[])
    return(
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {/* <Posts/> */}
            {posts.map((post)=>{
                return(
                    <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                     />
                )
            })}
  
        </div>
    )
}

export default Feed;