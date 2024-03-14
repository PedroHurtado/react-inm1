import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(10)
    function handlerClick(){
        setCount(count+2)
    }
    return(
        <button onClick={handlerClick}>count :{count}</button>
    )
}