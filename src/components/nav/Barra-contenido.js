

function Barracontenido(props){
    return(
        <div>
            <a className = {props.className} href= {props.href} >
               <h6>{props.text}</h6>
            </a>
        </div>    
    )   
}
export default Barracontenido;