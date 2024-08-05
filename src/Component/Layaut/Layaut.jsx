import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Layaut() {
    return ( 
        <>
        <Navbar/>
        <Outlet></Outlet>
        <Footer/>
        </>
     );
}

export default Layaut;