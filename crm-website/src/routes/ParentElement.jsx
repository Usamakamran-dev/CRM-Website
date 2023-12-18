import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function ParentElement(){

    return(
           <>
           <Navbar></Navbar>
           <div className="pt-20 overflow-hidden"> 
            <Outlet />
           </div>
           </>
    )}
    export default ParentElement;