import React from 'react'
import { useState, useRef } from 'react';
import "./Contact.module.css"

const Contact = () => {
    
  const datosFormulario = useRef(false);
  
  const [formData, setFormData] = useState({
      nombre: '',
      apellido: '',
      email: '',
  });

  const manejarCambio = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const manejarEnvio = (event) => {
      event.preventDefault();
      console.log(formData);
  };

return (
 <div className='contactanos'>
   <h3>Contactanos</h3>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, incidunt. Deserunt velit inventore laudantium ipsam eligendi. Itaque, maiores? Alias sequi id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est incidunt doloribus vitae neque vero quia qui quod! Provident tempore consequuntur amet molestiae libero rem non fugit, quod cumque corporis.</p>
   <h4>Dejanos tu consulta</h4>
   <form onSubmit={manejarEnvio} ref={datosFormulario} id='formulario'>
          <label>
              Nombre: 
               <input type="text" name="nombre" value={formData.nombre} onChange={manejarCambio}/>
          </label>
          <label>
              Apellido: 
              <input type="text" name="apellido" value={formData.apellido} onChange={manejarCambio}/>
          </label>
          <label>
              Email: 
              <input type="email" name="email" value={formData.email} onChange={manejarCambio}/>
          </label>
          <div id="consulta">
           <textarea placeholder="consultas"></textarea>
          </div>
          <br/>
          <button type="submit">Enviar</button>
      </form>
   
  
  
  </div>
)
};

export default Contact;
