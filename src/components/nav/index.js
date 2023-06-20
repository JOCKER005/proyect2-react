import Barracontenido from "./Barra-contenido";
import Aicon from "./Aicon";
// import { useHistory } from "react-router-dom"
import { useState } from "react"



function Nav(){

    
    
    const [menu, setMenu ] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }
    
    return(

        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <button
                    onClick={toggleMenu}
                    className={`navbar-toggler ${ menu ? "collapsed" : ""} `}
                    type="button" >
                        
                    <i className="bi bi-flower3"></i>
                    <h6>Menú</h6>
                    
                </button>
                
                <div className=" d-sm-flex align-items-end fixed-top2 ">

                        <h5 >Florciyita </h5>
                        <Aicon href="https://web.whatsapp.com/send?phone=5493873644156" title="3873644156" className="a2 aicon" icon=" bi-whatsapp " />
                        <Aicon href="https://www.instagram.com/vanesilflor" className="a2 aicon2" icon = "bi-instagram" />
                        <Aicon href="/" className="a2 aicon3" icon = "bi-facebook" />
                </div>

                <div className={`collapse navbar-collapse ${menu ? "show": ""} pink-opacity `} >
                
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <Barracontenido className="nav-link mx-xl-3" href="/turnos" text="Turnos"/>
                        <Barracontenido className="nav-link mx-xl-3" href="/products" text="Productos"/>
                        <Barracontenido className="nav-link mx-xl-3" href="/store" text="Tienda"/>
                        <Barracontenido className="nav-link mx-xl-3" href="/contact" text="Contactanos"/>            
                        <Barracontenido className="nav-link mx-xl-3" href="/others" text="Otros"/>
                    </ul>

                </div>
            </div>
        </nav>
    );

}
export default Nav;