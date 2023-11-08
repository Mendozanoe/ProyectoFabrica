import React from 'react';
import Hijo from './Hijo';



//Creo un componente
//a padre le paso el "title" como "props" que lo designe en el componente app

const Padre = ({title}) => {
//creo una lista de lo que quiero renderizar en mi componente
    const listaFrutas=["manzana", "banana", "naranja"];


//creo una funcion que me permita ver el contenido del la lista anterior de manera random
// Y llamo al componente hijo que recibe una "props" para que se renderize cada vez que haya una fruta
    const getFrutas=()=> listaFrutas.map(fruta=> <Hijo fruta={fruta}/>);


  return (
    //renderizado de la lista una por una
    <>
        Cajon de:{title}
       <ul>
       {getFrutas()}
       </ul>

    </>
  )
}

export default Padre;