

function Aicon(props){
    
    return(
        <a href={props.href} title={props.title} className={props.className} >
            <i className={props.icon}></i>
        </a>
    )
}
export default Aicon;