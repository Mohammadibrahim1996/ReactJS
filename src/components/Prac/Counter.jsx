import {REACT,useState} from 'react';

export const Counter = () => {
    const [Count,setCount]=useState(0);

    return(
        <div>
            <h3>Counter:{Count}</h3>
            <button onClick={()=> Count<10 && setCount(Count+1)}>Increament</button>
            <button onClick={()=>setCount(Count*0)}>Reset</button>
            <button onClick={()=> Count>0 && setCount(Count-1)}>Decreament</button>
        </div>
    );
};