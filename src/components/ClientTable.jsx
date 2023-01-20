import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";

const ClientTable = ({data}) => {

	const uriListClients="http://localhost:8081/cliente/list-client"
const [clientes, setclientes] = useState([]);

const mapTable= async ()=>{

	const informationClients=await axios.get(uriListClients)

	setclientes(informationClients.data)
	console.table(clientes)
	console.log(informationClients.data)	
}
		useEffect(()=>{
			mapTable()
		},[])

  return (
<section className='flexWrap'>
	<section className='TableContainer'>
	<table className='Table'>
		<caption className=''>INFORMACIÓN DE CLIENTE</caption>
		<thead>
			<tr>
				<th>Marca</th>
				<th>Tipo De Id</th>
				<th>Numero De Id</th>
				<th>Primer Nombre</th>
				<th>Segundo Nombre</th>
				<th>Primer Apellido</th>
				<th>Segundo Apellido</th>
				<th>Fecha De Nacimiento</th>
				<th>Pais</th>
				<th>Departamento</th>
				<th>Ciudad</th>
				<th>Dirección</th>
				<th>Acciones</th>
			</tr>
		</thead>
		<tbody>
				{clientes.map((cliente)=>{
					<tr key={cliente.id}>
						<td>
							{cliente.marca}
						</td>
						<td>
							{cliente.tipoDeId}
						</td>
						<td>
							{cliente.numeroDeId}
						</td>
						<td>
							{cliente.primerNombre}
						</td>
						<td>
							{cliente.segundoNombre}
						</td>
						<td>
							{cliente.primerApellido}
						</td>
						<td>
							{cliente.segundoApellido}
						</td>
						<td>
							{cliente.fechaDeNacimiento}
						</td>
						<td>
							{cliente.nombreDePais}
						</td>
						<td>
							{cliente.nombreDeDepartamento}
						</td>
						<td>
							{cliente.nombreDeCiudad}
						</td>
						<td>
							{cliente.direccion}
						</td>
					</tr>
				})}
					<tr>
				<td className='center'>
				<button className='tableButton'>
				<div className="icono">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
					</svg>
				</div>
				<span>Editar</span>
				</button>
				<button className='tableButton'>
				<div className="icono">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
					</svg>
				</div>
				<span>Eliminar</span>
				</button>
				</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td className='center'>
				<button className='tableButton'>
				<div className="icono">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
					</svg>
				</div>
				<span>Editar</span>
				</button>
				<button className='tableButton'>
				<div className="icono">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
					</svg>
				</div>
				<span>Eliminar</span>
				</button>
				</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td className='center'>
				<button className='tableButton'>
				<div className="icono">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
					</svg>
				</div>
				<span>Editar</span>
				</button>
				<button className='tableButton'>
				<div className="icono">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
					</svg>
				</div>
				<span>Eliminar</span>
				</button>
				</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td className='center'>
				<button className='tableButton'>
				<div className="icono">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
					</svg>
				</div>
				<span>Editar</span>
				</button>
				<button className='tableButton'>
				<div className="icono">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
					</svg>
				</div>
				<span>Eliminar</span>
				</button>
				</td>
			</tr>
			</tbody>
		</table>
	</section>
</section>
  )
}

export default ClientTable