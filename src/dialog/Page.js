import Dialog from "./Dialog"

export default function Page(){

    function open(){
        let dialog;
        const fn=()=>{
            return dialog
        }
        fn.set = (d)=>dialog =d
        return fn;
    }
    const openCb = open();

    function openDialog(){
        const dialog = openCb()
        dialog.current.show();
    }
    function confirmDialog(){

    }
    return (
        <>
            <Dialog confirm={confirmDialog} open={openCb}>
                <p>Hola soy un parrafo</p>
            </Dialog>
            <button onClick={openDialog}>Abrir dialog</button>
        </>
    )

}