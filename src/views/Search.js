import React, { useState } from 'react'
import { useEffect } from 'react';
import { Post } from '../Post';
import { proyectos } from '../helpers/proyects.json';



export const Search = () => {



  const [ sugerencias, setSugerencias ] = useState([]);

  const [ resultados, setResultados ] = useState([]);


  const [ inputValues, setInputValues ]= useState({
    search:''
  })


  const escribirInput = (e) =>
  {
    const { name, value } = e.target;


    setInputValues({
      ...inputValues, [name]:value,
    })


  }

  const include = ( string ) =>
  {
    // Escapamos los caracteres especiales de la consulta y creamos una expresión regular
    const escapedQuery = inputValues.search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedQuery, 'i');
    return string.toLowerCase().match(regex.source.toLowerCase());
  }

  const sendForm = (e) =>
  {
    e.preventDefault();


    if(inputValues.search === '' )
    {
      console.log('nadaaa');
    }

    const data = [];
    // Filtramos el conjunto de datos con la expresión regular
    proyectos.map( (obj) => (include(obj.title) || include(obj.techs)) && data.push(obj));
    setResultados( data );
    setSugerencias([]);

  }

  const mostrarResultado = (resultado) =>
  {
    setResultados([resultado]);
    setSugerencias([]);

  }

  const mostrarSugerencias = () => 
  {
        const data = [];
        proyectos.map( (obj) => (include(obj.title) || include(obj.techs)) && data.push(obj) )
        
        inputValues.search.length === 0 ? setSugerencias([]) : setSugerencias( data );
  };


 
  useEffect(()=>
  {
    mostrarSugerencias();

  },[inputValues])


  return (
    <div className='search w-full h-full sm:h-5/6 sm:w-5/6 xl:w-2/3 sm:rounded-2xl overflow-y-auto'>


 
    <form after="formx" onSubmit={ sendForm } className='flex flex-col justify-between w-11/12 mx-auto relative'>
        
        <div className='flex  justify-between'>
          <input className={`text-black bg-gray-100/70  my-4 py-4 px-2  shadow-lg w-10/12 ${ sugerencias.length > 0 ? 'rounded-t' : 'rounded' }`} name='search' type='text' placeholder='Buscar' onChange={ escribirInput } value={ inputValues.search } required />
          <button className='self-end justify-self-end box-content mb-4 px-2 sm:px-4 py-1.5 shadow bg-gray-100/50 text-white rounded-full text-base sm:text-sm '>Buscar</button>
        </div>

        <div className=" bg-gray-100/ w-10/12 bg-gray-100/90 shadow-lg rounded-b absolute top-12 text-black z-50">
          <p>{sugerencias.map( s => ( <p className='my-1 cursor-pointer hover:bg-gray-300/50 box-border p-1 ' key={s.id} onClick={ ()=>{mostrarResultado(s)} }>{s.title}</p> ))}</p>
         </div>
    </form>

    {/* RESULTADOS */}
      <div>
        {resultados.map( r => <Post proyect={r} /> )}
      </div>
    </div>

)}

  

  
