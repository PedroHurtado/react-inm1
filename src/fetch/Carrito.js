import { useEffect, useState } from "react";
import pubsub from "./pubsub";

export default function Carrito(){
    const [data,setData] = useState([])
    useEffect(()=>{
        /*const handlerCarrito = (ev)=>{
            data.push(ev.detail)
            setData([...data])
        }
        window.addEventListener("carrito",handlerCarrito)
        return ()=>window.removeEventListener("carrito",handlerCarrito)*/
        const dispose = pubsub.on("carrito",(pizza)=>{
            data.push(pizza)
            setData([...data])
        })
        return ()=>dispose();

    })
    return(
        <div> carrito : {data.length}</div>
    )
}