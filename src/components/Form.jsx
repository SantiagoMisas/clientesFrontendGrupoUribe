import React from 'react'

const Form = () => {
  return (

        <form className='flexWrap' action="">
    		    <input className="form_table_input" placeholder='Marca' type="text"/>
            <input className="form_table_input" placeholder='Tipo De Id' type="text"/>
            <input className="form_table_input" placeholder='Numero De Id' type="text"/>
            <input className="form_table_input" placeholder='Primer Nombre' type="text"/>
            <input className="form_table_input" placeholder='Segundo Nombre' type="text"/>
            <input className="form_table_input" placeholder='Primer Apellido' type="text"/>
            <input className="form_table_input" placeholder='Segundo Apellido' type="text"/>
            <input className="form_table_input" placeholder='Fecha De Nacimiento' type="text"/>
            <input className="form_table_input" placeholder='Pais' type="text"/>
            <input className="form_table_input" placeholder='Departamento' type="text"/>
            <input className="form_table_input" placeholder='Ciudad' type="text"/>
            <input className="form_table_input" placeholder='Dirección' type="text"/>
        </form>
  )
}

export default Form