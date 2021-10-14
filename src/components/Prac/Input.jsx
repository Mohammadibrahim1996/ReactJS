import  { REACT ,useState } from "react";

export const Input = () =>{
    const [name,setName]= useState('');
    const [ age,setAge]=useState('');
    const [ message,setMessage]=useState('');

    return(
        <div>
            <input  type="text" placeholder="YourName" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Age" onChange={(e)=>setAge(e.target.value)} />
            <br />
            <input type="text" placeholder="Message" onChange={(e)=>setMessage(e.target.value)}/>
            <h4>Your Name: {name}</h4>
            <h4>Your Age:{age}</h4>
            <h4>Your Message:{message}</h4>
        </div>

    );
};