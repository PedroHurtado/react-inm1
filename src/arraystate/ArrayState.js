import { useState } from "react";

export default function ArrayState(){
    const [data,setData] = useState([1,2,3])
    function handlerClick(){
        data.push(data.length+1)
        setData([...data])
    }

    return(
        <>
            <button onClick={handlerClick}>Add</button>
            {data.map(v=><div key={v}>{v}</div>)}
        </>
    )
}