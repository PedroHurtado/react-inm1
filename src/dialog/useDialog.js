export function useDialog(){
    function open(){
        let _dialog;
        const fn=()=>{
            return _dialog
        }
        fn.set = (dialog)=>_dialog =dialog
        return fn;
    }
    return open();
}