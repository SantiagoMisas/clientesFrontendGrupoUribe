import React from 'react'
import { useState, useEffect } from 'react';

const Add = () => {

  const initialForm={
    id: null,
    marca:"",
    tipoDeId:"",
    numeroDeId:"",
    primerNombre:"",
    segundoNombre:"",
    primerApellido:"",
    segundoApellido:"",
    fechaDeNacimiento:"",
    pais:"",
    departamento:"",
    ciudad:"",
    direccion:""
  }
  const{form, setForm}=useState(initialForm)

    const handleChange=(e)=>{}

    const handleSubmit=(e)=>{}
      
    const handleReset=(e)=>{}
  return (
<form onSubmit={handleSubmit} className='flexWrap' action="">
<input value={form.marca} onChange={handleChange} name='marca' className="form_table_input" placeholder='Marca' type="text"/>
<input value={form.tipoDeId} onChange={handleChange} name='tipoDeId' className="form_table_input" placeholder='Tipo De Id' type="text"/>
<input value={form.numeroDeId} onChange={handleChange} name='numeroDeId' className="form_table_input" placeholder='Numero De Id' type="text"/>
<input value={form.primerNombre} onChange={handleChange} name='primerNombre' className="form_table_input" placeholder='Primer Nombre' type="text"/>
<input value={form.segundoNombre} onChange={handleChange} name='segundoNombre' className="form_table_input" placeholder='Segundo Nombre' type="text"/>
<input value={form.primerApellido} onChange={handleChange} name='primerApellido' className="form_table_input" placeholder='Primer Apellido' type="text"/>
<input value={form.segundoApellido} onChange={handleChange} name='segundoApellido' className="form_table_input" placeholder='Segundo Apellido' type="text"/>
<input value={form.fechaDeNacimiento} onChange={handleChange} name='fechaDeNacimiento' className="form_table_input" placeholder='Fecha De Nacimiento' type="text"/>
<input value={form.pais} onChange={handleChange} name='pais' className="form_table_input" placeholder='Pais' type="text"/>
<input value={form.departamento} onChange={handleChange} name='departamento' className="form_table_input" placeholder='Departamento' type="text"/>
<input value={form.ciudad} onChange={handleChange} name='ciudad' className="form_table_input" placeholder='Ciudad' type="text"/>
<input value={form.direccion} onChange={handleChange} name='direccion' className="form_table_input" placeholder='Dirección' type="text"/>
<input onChange={handleChange} type="submit" value="Agregar" />
<input onChange={handleChange} onClick={handleReset} type="reset" value="Limpiar"/>
</form>
  )
}

export default Add