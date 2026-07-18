import React, {useState,useEffect} from"react";

function WindowResize(){

    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("Event Listener added");
        return ()=>{
            window.removeEventListener("resize",handleResize);
            console.log("Event Listener Removed");
        }
    },[]);

    useEffect(()=>{
        document.title=`Width: ${width} Height: ${height}`;
    },[width,height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
    <p>Width: {width}px</p>
    <p>Height: {height}px</p>
    </>);

}

export default WindowResize;