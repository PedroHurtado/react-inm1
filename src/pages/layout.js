import './layout.css'
import { Outlet } from "react-router-dom"
import Menu from "./menu"


export default function Layout(){

    return(
        <div className="layout">
            <Menu/>
            <Outlet/>
        </div>
    )

}