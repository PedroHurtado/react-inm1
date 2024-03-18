import { useEffect, useState } from "react";

export default function Carrito(){
    const [data,setData] = useState([])
    useEffect(()=>{
        const handlerCarrito = (ev)=>{
            data.push(ev.detail)
            setData([...data])
        }
        window.addEventListener("carrito",handlerCarrito)
        return ()=>window.removeEventListener("carrito",handlerCarrito)
    })
    return(
        <div> carrito : {data.length}</div>
    )
}