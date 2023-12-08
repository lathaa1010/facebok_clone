import React from "react";

const Widget=()=>{
    return(
        <iframe
        src="https://example.com/content-to-embed"
        width="500"
        height="702"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
    
    );
};

export default Widget;