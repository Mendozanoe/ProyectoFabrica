import React, { useState } from 'react'
import "./formContact.css";

export const FormContact = () => {

    const[customerData,setCustomerData]=useState(
        {
            name:"",
            email:"",
            phone:""
        }
    );

    const handleInputChange=(e)=>{
        const {name,value}= e.target;
        setCustomerData({
            ...customerData,
            [name]:value,
        });
    }

    const handleSubmit=()=>{
        e.preventDefault();
    }

  return (
    <div className='formulario'>
        <h2>Dejanos tus datos</h2>
      <form onSubmit={handleSubmit}>
        <div className='data'>
          <label>Nombre  y Apellido:</label>
          <input className='input'
            type="text"
            name="name"
            value={customerData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className='data'>
          <label>Correo Electrónico:</label>
          <input className='input'
            type="email"
            name="email"
            value={customerData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='data'>
          <label>Número de Teléfono:</label>
          <input className='input'
            type="text"
            name="phone"
            value={customerData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className='buttonTwo'>
        <button className='buttonOne' type="submit">Enviar</button>
        </div>
      </form>
       
    </div>
  )
}
