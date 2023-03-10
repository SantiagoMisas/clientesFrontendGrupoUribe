import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormAction } from "react-router-dom";

const Add = () => {
  const uriGuardarCliente = "http://localhost:8081/cliente/save-client";

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
    e.preventDefault
    try {
      console.log(direccion)
      console.log(fechaDeNacimiento)
      console.log(ciudad)
      console.log(departamento)
      console.log(marca)
      console.log(pais)
      console.log(numeroDeId)
      console.log(primerApellido)
      console.log(primerNombre)
      console.log(segundoApellido)
      console.log(segundoNombre)
      console.log(tipoDeId)
  


      const rest=axios.post(uriGuardarCliente, {
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
      console.log("Cliente Agregado")
      console.table(rest.data)
    } catch (error) {
      console.log(error)
      
    }
    
  };

  return (
    <form  className="flexWrap">
      <select
        className="form_table_input"
        id="marca"
        name="marca"
        onChange={(e) => setMarca(e.target.value)}

      >
        <option value="">Marca</option>
        <option value="Americanino">Americanino</option>
        <option value="AmericanEagle">American Eagle</option>
        <option value="Chevignon">Chevignon</option>
        <option value="Esprit">Esprit</option>
        <option value="Naf Naf">Naf Naf</option>
        <option value="Rifle">Rifle</option>
{console.log(marca)}
      </select>
      <select
        className="form_table_input"
        id="tipoDeId"
        name="tipoDeId"
        onChange={(e) => setTipoDeId(e.target.value)}

      >
        <option value="">Tipo De Documento</option>
        <option value="Cedula">Cedula</option>
        <option value="CedulaExtranjeria">Cedula Extranjeria</option>
        <option value="Pasaporte">Pasaporte</option>
      </select>
      <input
        name="numeroDeId"
        className="form_table_input"
        placeholder="Numero De Id"
        type="text"
        onChange={(e) => setNumeroDeId(e.target.value)}
      />
      <input
        name="primerNombre"
        className="form_table_input"
        placeholder="Primer Nombre"
        type="text"
        onChange={(e) => setPrimerNombre(e.target.value)}
      />
      <input
        name="segundoNombre"
        className="form_table_input"
        placeholder="Segundo Nombre"
        type="text"
        onChange={(e) => setSegundoNombre(e.target.value)}
      />
      <input
        name="primerApellido"
        className="form_table_input"
        placeholder="Primer Apellido"
        type="text"
        onChange={(e) => setPrimerApellido(e.target.value)}
      />
      <input
        onChange={(e) => setSegundoApellido(e.target.value)}
        name="segundoApellido"
        className="form_table_input"
        placeholder="Segundo Apellido"
        type="text"
      />
      <input
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
      >
        <option value="">Pais</option>
        <option value="pais">Colombia</option>
      </select>
      <select
        className="form_table_input"
        id="departamento"
        name="departamento"
        required
        onChange={(e) => setDepartamento(e.target.value)}
      >
        <option value="">Departamento</option>
        <option value="Amazonas">Amazonas</option>
        <option value="Antioquia">Antioquia</option>
        <option value="Arauca">Arauca</option>
        <option value="Atl??ntico">Atl??ntico</option>
        <option value="Bol??var">Bol??var</option>
        <option value="Boyac??">Boyac??</option>
        <option value="Caldas">Caldas</option>
        <option value="Caquet??">Caquet??</option>
        <option value="Casanare">Casanare</option>
        <option value="Cauca">Cauca</option>
        <option value="Cesar">Cesar</option>
        <option value="Choc??">Choc??</option>
        <option value="C??rdoba">C??rdoba</option>
        <option value="Cundinamarca">Cundinamarca</option>
        <option value="Guain??a">Guain??a</option>
        <option value="Guaviare">Guaviare</option>
        <option value="Huila">Huila</option>
        <option value="La Guajira">La Guajira</option>
        <option value="Magdalena">Magdalena</option>
        <option value="Meta">Meta</option>
        <option value="Nari??o">Nari??o</option>
        <option value="Norte de Santander">Norte de Santander</option>
        <option value="Putumayo">Putumayo</option>
        <option value="Quind??o">Quind??o</option>
        <option value="Risaralda">Risaralda</option>
        <option value="San Andr??s y Providencia">
          San Andr??s y Providencia
        </option>
        <option value="Santander">Santander</option>
        <option value="Sucre">Sucre</option>
        <option value="Tolima">Tolima</option>
        <option value="Valle del Cauca">Valle del Cauca</option>
        <option value="Vaup??s">Vaup??s</option>
        <option value="Vichada">Vichada</option>
      </select>
      <select
        className="form_table_input"
        name="ciudad"
        onChange={(e) => setCiudad(e.target.value)}
      >
        <option value="">Ciudad</option>
        <option value="Arauca">Arauca</option>
        <option value="Armenia">Armenia</option>
        <option value="Barranquilla">Barranquilla</option>
        <option value="Bogot??">Bogot??</option>
        <option value="Bucaramanga">Bucaramanga</option>
        <option value="Cali">Cali</option>
        <option value="Cartagena">Cartagena</option>
        <option value="C??cuta">C??cuta</option>
        <option value="Florencia">Florencia</option>
        <option value="Ibagu??">Ibagu??</option>
        <option value="Leticia">Leticia</option>
        <option value="Manizales">Manizales</option>
        <option value="Medell??n">Medell??n</option>
        <option value="Mit??">Mit??</option>
        <option value="Mocoa">Mocoa</option>
        <option value="Monter??a">Monter??a</option>
        <option value="Neiva">Neiva</option>
        <option value="Pasto">Pasto</option>
        <option value="Pereira">Pereira</option>
        <option value="Popay??n">Popay??n</option>
        <option value="Puerto Carre??o">Puerto Carre??o</option>
        <option value="Puerto In??rida">Puerto In??rida</option>
        <option value="Quibd??">Quibd??</option>
        <option value="Riohacha">Riohacha</option>
        <option value="San Andr??s">San Andr??s</option>
        <option value="San Jos?? del Guaviare">San Jos?? del Guaviare</option>
        <option value="Santa Marta">Santa Marta</option>
        <option value="Sincelejo">Sincelejo</option>
        <option value="Tunja">Tunja</option>
        <option value="Valledupar">Valledupar</option>
        <option value="Villavicencio">Villavicencio</option>
        <option value="Yopal">Yopal</option>
      </select>
      <input
        onChange={(e) => setDireccion(e.target.value)}
        name="direccion"
        className="form_table_input"
        placeholder="Direcci??n"
        type="text"
      />
      <button
        type="submit"
        className="button"
        onClick={createCliente}
  
      >
        <span>Agregar</span>
      </button>
      <button
        className="button"
        type="reset"
      >
        <span>Buscar</span>
      </button>
    </form>
  );
};

export default Add;
