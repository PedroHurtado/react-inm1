import Dialog from "./Dialog"
import { useDialog } from "./useDialog";

export default function Page(){

    
    const open = useDialog();

    function openDialog(){
        const dialog = open()
        dialog.current.show();
    }
    function confirmDialog(){
        console.log("Confirmado")
    }
    return (
        <>
            <Dialog confirm={confirmDialog} open={open}>
                <p>Hola soy un parrafo</p>
            </Dialog>
            <button onClick={openDialog}>Abrir dialog</button>
        </>
    )

}