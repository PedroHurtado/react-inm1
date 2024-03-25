import { DIALOGMODE } from "./dialogmode";

export function useDialog(mode= DIALOGMODE.show) {    
    let openDialog;
    const fn = (ev) => {
        openDialog &&  openDialog(ev, mode)
    }
    fn.set = (open) => openDialog = open
    return fn;    
}