import './Form.css'
import { useRef } from "react";
import Input from './Input';

export default function Form(){
    const name =useRef();
    const phone = useRef();
    function handlerSubmit(ev){
        ev.preventDefault();
        const data = {
            name:name.current.value,
            phone:phone.current.value,
        }
        console.log(data)
    }
    return (
        <form onSubmit={handlerSubmit}>
            <Input id="name" text="introduzca el nombre" ref={name}/>
            <Input id="phone" text="introduzca el teléfono" ref={phone}/>
            <button type="submit">Enviar datos</button>
        </form>
    )
}