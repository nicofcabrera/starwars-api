import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';

const baseUrl = 'https://swapi.dev/api/';

const PageElement = ({element}) => {
  const [datos, setDatos] = useState([]);

  const obtenerDatos = async () => {
    const resultadoDelAxios = await axios.get(baseUrl+element)
    setDatos(resultadoDelAxios.data.results);
  };

  useEffect(() => {
    obtenerDatos();
  }, [element]);

  return (
    <>
      {
        datos.map((elemento) => <Card title={elemento.name ? elemento.name : elemento.title} /> )
      }
    </>
  )
};

export default PageElement;

// Actividad:

// * Realizar un nuevo componente que renderice un LISTADO DE CARDS 
// * Realizar un nuevo componente que sea un botón y reutiliceló para cumplir 2 funciones básicas: Ir a la siguiente paginación (llamado "Ver más") y hacer que la pantalla suba al inicio, es decír que suba al navbar (llamado "Ir a arriba")