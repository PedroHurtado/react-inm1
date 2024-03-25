import { useRef } from "react"
import { DIALOGMODE } from "./dialogmode";

export default function Dialog({ children, open, confirm }) {
    const dialogRef = useRef()
    open && open.set(opendialog);

    function opendialog(ev,mode){
        ev.stopPropagation();
        if(mode===DIALOGMODE.show){
            dialogRef.current.show();            
        }
        else{
            dialogRef.current.showModal();
        }
    }
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