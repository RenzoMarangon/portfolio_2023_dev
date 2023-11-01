import React, { useState } from 'react'
import { useEffect } from 'react';
<<<<<<< HEAD
import { Post } from '../Post';


=======
>>>>>>> 36531fe423047d90b483c56457f5663f5284a690


export const Search = () => {

<<<<<<< HEAD

  const [cositas, setCositas ] = useState([]);


  const [ sugerencias, setSugerencias ] = useState([]);

  const [ resultados, setResultados ] = useState([]);

 


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(json=> setCositas(json))


  },[])
 


=======
  const [cositas, setCositas ] = useState({});


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=> setCositas(json))

  },[])
  
>>>>>>> 36531fe423047d90b483c56457f5663f5284a690


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


  const sendForm = (e) =>
  {
    e.preventDefault();

<<<<<<< HEAD
=======

>>>>>>> 36531fe423047d90b483c56457f5663f5284a690
    if(inputValues.search === '' )
    {
      console.log('nadaaa');
    }

<<<<<<< HEAD

=======
>>>>>>> 36531fe423047d90b483c56457f5663f5284a690
    // Escapamos los caracteres especiales de la consulta y creamos una expresión regular
    const escapedQuery = inputValues.search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedQuery, 'i');

<<<<<<< HEAD
    // Filtramos el conjunto de datos con la expresión regular
    const data = [];
    cositas.map( (obj) => obj.title.toLowerCase().match(regex.source.toLowerCase()) && data.push(obj) )
  
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
        // Escapamos los caracteres especiales de la consulta y creamos una expresión regular
        const escapedQuery = inputValues.search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedQuery, 'i');
    
        // Filtramos el conjunto de datos con la expresión regular
        const data = [];
        cositas.map( (obj) => obj.title.toLowerCase().match(regex.source.toLowerCase()) && data.push(obj) )
        
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

        <div class=" bg-gray-100/ w-10/12 bg-gray-100/90 shadow-lg rounded-b absolute top-12 text-black z-50">
          <p>{sugerencias.map( r => ( <p className='my-1 cursor-pointer hover:bg-gray-300/50 box-border p-1 ' key={r.id} onClick={ mostrarResultado }>{r.title}</p> ))}</p>
         </div>
=======


    // Filtramos el conjunto de datos con la expresión regular
    const filteredData = cositas.find( (obj) => obj.id == regex );



  }

  

  return (
    <div className='search w-full h-full sm:h-5/6 sm:w-5/6 xl:w-2/3 sm:rounded-2xl'>

 
    <form onSubmit={ sendForm } className='flex justify-between w-11/12 mx-auto '>
        <input className='text-black bg-gray-100/70  my-2 py-4 px-2 rounded shadow-lg w-10/12' name='search' type='text' placeholder='Buscar' onChange={ escribirInput } value={ inputValues.search } required />
        <button className='self-end justify-self-end box-content my-2 px-2 sm:px-4 py-1.5 shadow bg-gray-100/50 text-white rounded-full text-base sm:text-sm '>Buscar</button>
>>>>>>> 36531fe423047d90b483c56457f5663f5284a690
    </form>
   

    <div>
      
      {
        resultados.map( post => (<Post key={post} />))
      }
    </div>


    </div>
  )
}
