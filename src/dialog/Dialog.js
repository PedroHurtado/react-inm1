import { useRef } from "react"

export default function Dialog({ children, open, confirm }) {
    const dialogRef = useRef()
    open.set(dialogRef);
    function handlerClose(ev){
        ev.stopPropagation();
        dialogRef.current.close();
    }
    function handlerSubmit(ev){
        ev.stopPropagation();  
        ev.preventDefault();      
        dialogRef.current.close();
        confirm();
    }
    return (
        <dialog ref={dialogRef}>
            <form action="dialog">
                {children}
                <menu>
                    <button type="reset" onClick={handlerClose}>Cerrar</button>
                    <button type="submit" onClick={handlerSubmit}>Confirmar</button>
                </menu>
            </form>
        </dialog>
    )
}