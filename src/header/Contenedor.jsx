

//en esta opcion creamos un marco contenedor que puede ser usado con distintos contenidos.


const Contenedor=(props)=>{
    return(
        <div style={{background:"aqua",padding:"1em", borderRadius:"10px", margin:"2em"}}>
            <p>Contenedor</p>

            {props.children} 


            </div>
    )
}

export default Contenedor;