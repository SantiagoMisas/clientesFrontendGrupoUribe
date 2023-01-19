import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormAction } from "react-router-dom";
import Buttons from "./Buttons";

const Add = () => {
  const uriGuardarCliente = "http://localhost:8080/cliente/save-client";

  const [marca, setMarca] = useState();
  const [tipoDeId, setTipoDeId] = useState();
  const [numeroDeId, setNumeroDeId] = useState();
  const [primerNombre, setPrimerNombre] = useState();
  const [segundoNombre, setSegundoNombre] = useState();
  const [primerApellido, setPrimerApellido] = useState();
  const [segundoApellido, setSegundoApellido] = useState();
  const [fechaDeNacimiento, setFechaDeNacimiento] = useState();
  const [pais, setPais] = useState();
  const [departamento, setDepartamento] = useState();
  const [ciudad, setCiudad] = useState();
  const [direccion, setDireccion] = useState();

  const [datosCliente, setDatosCliente] = useState([]);

  useEffect(() => {}, []);

  const createCliente = async (e) => {
    try {
      axios.post(uriGuardarCliente, {
        direccion: direccion,
        fecha_de_nacimiento: fechaDeNacimiento,
        nombre_de_ciudad: ciudad,
        nombre_de_departamento: departamento,
        nombre_de_marca: marca,
        nombre_de_pais: pais,
        numero_de_identificacion: numeroDeId,
        primer_apellido: primerApellido,
        primer_nombre: primerNombre,
        segundo_apellido: segundoApellido,
        segundo_nombre: segundoNombre,
        tipo_de_identificacion: tipoDeId,
      });
      
    } catch (error) {
      console.log(error)
      
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className="flexWrap" action="">
      <select
        className="form_table_input"
        id="marca"
        name="marca"
        onChange={(e) => setMarca(e.target.value)}
        value={marca}
      >
        <option value="">Marca</option>
        <option value="Chevignon">Chevignon</option>
        <option value="Naf Naf">Naf Naf</option>
        <option value="Americanino">Americanino</option>
        <option value="AmericanEagle">AmericanEagle</option>
        <option value="Rifle">Rifle</option>
        <option value="Esprit">Esprit</option>
      </select>
      <select
        className="form_table_input"
        id="tipoDeId"
        name="tipoDeId"
        onChange={(e) => setTipoDeId(e.target.value)}
        value={tipoDeId}
      >
        <option value="">Tipo De Documento</option>
        <option value="Cedula">Cedula</option>
        <option value="CedulaExtranjeria">Cedula Extranjeria</option>
        <option value="Pasaporte">Pasaporte</option>
      </select>
      <input
        value={numeroDeId}
        name="numeroDeId"
        className="form_table_input"
        placeholder="Numero De Id"
        type="text"
        onChange={(e) => setNumeroDeId(e.target.value)}
      />
      <input
        value={primerNombre}
        name="primerNombre"
        className="form_table_input"
        placeholder="Primer Nombre"
        type="text"
        onChange={(e) => setPrimerNombre(e.target.value)}
      />
      <input
        value={segundoNombre}
        name="segundoNombre"
        className="form_table_input"
        placeholder="Segundo Nombre"
        type="text"
        onChange={(e) => setSegundoNombre(e.target.value)}
      />
      <input
        value={primerApellido}
        name="primerApellido"
        className="form_table_input"
        placeholder="Primer Apellido"
        type="text"
        onChange={(e) => setPrimerApellido(e.target.value)}
      />
      <input
        value={segundoApellido}
        onChange={(e) => setSegundoApellido(e.target.value)}
        name="segundoApellido"
        className="form_table_input"
        placeholder="Segundo Apellido"
        type="text"
      />
      <input
        value={fechaDeNacimiento}
        onChange={(e) => setFechaDeNacimiento(e.target.value)}
        name="fechaDeNacimiento"
        className="form_table_input"
        placeholder="Fecha De Nacimiento"
        type="text"
      />
      <select
        className="form_table_input"
        id="pais"
        name="pais"
        onChange={(e) => setPais(e.target.value)}
        value={pais}
      >
        <option value="">Pais</option>
        <option value="pais">Colombia</option>
      </select>
      <select
        className="form_table_input"
        id="departamento"
        name="departamento"
        required
        value={departamento}
        onChange={(e) => setDepartamento(e.target.value)}
      >
        <option value="">Departamento</option>
        <option value="Amazonas">Amazonas</option>
        <option value="Antioquia">Antioquia</option>
        <option value="Arauca">Arauca</option>
        <option value="Atlántico">Atlántico</option>
        <option value="Bolívar">Bolívar</option>
        <option value="Boyacá">Boyacá</option>
        <option value="Caldas">Caldas</option>
        <option value="Caquetá">Caquetá</option>
        <option value="Casanare">Casanare</option>
        <option value="Cauca">Cauca</option>
        <option value="Cesar">Cesar</option>
        <option value="Chocó">Chocó</option>
        <option value="Córdoba">Córdoba</option>
        <option value="Cundinamarca">Cundinamarca</option>
        <option value="Guainía">Guainía</option>
        <option value="Guaviare">Guaviare</option>
        <option value="Huila">Huila</option>
        <option value="La Guajira">La Guajira</option>
        <option value="Magdalena">Magdalena</option>
        <option value="Meta">Meta</option>
        <option value="Nariño">Nariño</option>
        <option value="Norte de Santander">Norte de Santander</option>
        <option value="Putumayo">Putumayo</option>
        <option value="Quindío">Quindío</option>
        <option value="Risaralda">Risaralda</option>
        <option value="San Andrés y Providencia">
          San Andrés y Providencia
        </option>
        <option value="Santander">Santander</option>
        <option value="Sucre">Sucre</option>
        <option value="Tolima">Tolima</option>
        <option value="Valle del Cauca">Valle del Cauca</option>
        <option value="Vaupés">Vaupés</option>
        <option value="Vichada">Vichada</option>
      </select>
      <select
        className="form_table_input"
        id="inputCiudadLine2"
        onChange={(e) => setCiudad(e.target.value)}
        value={ciudad}
      >
        <option value="">Ciudad</option>
        <option value="Arauca">Arauca</option>
        <option value="Armenia">Armenia</option>
        <option value="Barranquilla">Barranquilla</option>
        <option value="Bogotá">Bogotá</option>
        <option value="Bucaramanga">Bucaramanga</option>
        <option value="Cali">Cali</option>
        <option value="Cartagena">Cartagena</option>
        <option value="Cúcuta">Cúcuta</option>
        <option value="Florencia">Florencia</option>
        <option value="Ibagué">Ibagué</option>
        <option value="Leticia">Leticia</option>
        <option value="Manizales">Manizales</option>
        <option value="Medellín">Medellín</option>
        <option value="Mitú">Mitú</option>
        <option value="Mocoa">Mocoa</option>
        <option value="Montería">Montería</option>
        <option value="Neiva">Neiva</option>
        <option value="Pasto">Pasto</option>
        <option value="Pereira">Pereira</option>
        <option value="Popayán">Popayán</option>
        <option value="Puerto Carreño">Puerto Carreño</option>
        <option value="Puerto Inírida">Puerto Inírida</option>
        <option value="Quibdó">Quibdó</option>
        <option value="Riohacha">Riohacha</option>
        <option value="San Andrés">San Andrés</option>
        <option value="San José del Guaviare">San José del Guaviare</option>
        <option value="Santa Marta">Santa Marta</option>
        <option value="Sincelejo">Sincelejo</option>
        <option value="Tunja">Tunja</option>
        <option value="Valledupar">Valledupar</option>
        <option value="Villavicencio">Villavicencio</option>
        <option value="Yopal">Yopal</option>
      </select>
      <input
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        name="direccion"
        className="form_table_input"
        placeholder="Dirección"
        type="text"
      />
      <button
        onChange={handleChange}
        type="submit"
        value="Agregar"
        className="button"
        onClick={createCliente}
  
      >
        <span>Agregar</span>
      </button>
      <button
        className="button"
        onChange={handleChange}
        onClick={handleReset}
        type="reset"
        value="Limpiar"
      >
        <span>Buscar</span>
      </button>
    </form>
  );
};

export default Add;
