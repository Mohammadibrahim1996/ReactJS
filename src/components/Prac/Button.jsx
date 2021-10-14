import {React,useState} from "react";
export const Button2 =()=>{
    const [Name,setName]= useState(0);
    const [Age,setAge]= useState(0);
    const [Message,setMessage]= useState(0);
    const handleClick=()=>{
            document.getElementById("name").innerHTML=`Your Name: ${Name}`;
            document.getElementById("age").innerHTML=`Your Age:${Age}`;
            document.getElementById("Message").innerHTML=`Your Message:${Message}`;
    }

    return(
        <div>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
            <br />
            <input type="text" placeholder="Message" onChange={(e)=>setMessage(e.target.value)} />
            <br />
            <button onClick={handleClick}>Submit</button>
            <br />
            <h4 id="name">Your Name:</h4>
            <h4 id="age">Your Age:</h4>
            <h4 id="Message">Your Message:</h4>
        </div>
    );
};