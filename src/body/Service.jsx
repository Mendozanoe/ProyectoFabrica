import React from 'react'
import Diseno from '../servicios/Diseno'
import Educacion from '../servicios/Educacion'
import Impresion from '../servicios/Impresion'
import "../servicios/diseno.css"

const Service = () => {
    return (
        <div >


            <div className='content-two'>
                <Diseno />
                <Educacion />
                <Impresion />

            </div>
        </div>
    )
}

export default Service