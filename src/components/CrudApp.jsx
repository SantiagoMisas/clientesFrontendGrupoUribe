import { useState } from 'react';
import Add from './Add';
import ClientTable from './ClientTable';


const [db, setDb] = useState(initialDb);
const initialDb=[
 {
  id: 1,
  marca: "",
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
 },
 {
  id: 2,
  marca: "Chevignon",
  tipoDeId:"Cedula",
  numeroDeId:"111",
  primerNombre:"Steff",
  segundoNombre:"",
  primerApellido:"Zea",
  segundoApellido:"",
  fechaDeNacimiento:"1993-7-10",
  pais:"colombia",
  departamento:"antioquia",
  ciudad:"medellin",
  direccion:"las playas"
 }
];
const CrudApp = () => {
  return (
<section>
<Add/>
<ClientTable data={db}/>

</section>
  )
}

export default CrudApp