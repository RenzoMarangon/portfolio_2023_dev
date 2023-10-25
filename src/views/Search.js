import React, { useState } from 'react'
import { useEffect } from 'react';


export const Search = () => {

  const [cositas, setCositas ] = useState({});


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=> setCositas(json))

  },[])
  


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


    if(inputValues.search === '' )
    {
      console.log('nadaaa');
    }

    // Escapamos los caracteres especiales de la consulta y creamos una expresión regular
    const escapedQuery = inputValues.search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedQuery, 'i');



    // Filtramos el conjunto de datos con la expresión regular
    const filteredData = cositas.find( (obj) => obj.id == regex );



  }

  

  return (
    <div className='search w-full h-full sm:h-5/6 sm:w-5/6 xl:w-2/3 sm:rounded-2xl'>

 
    <form onSubmit={ sendForm } className='flex justify-between w-11/12 mx-auto '>
        <input className='text-black bg-gray-100/70  my-2 py-4 px-2 rounded shadow-lg w-10/12' name='search' type='text' placeholder='Buscar' onChange={ escribirInput } value={ inputValues.search } required />
        <button className='self-end justify-self-end box-content my-2 px-2 sm:px-4 py-1.5 shadow bg-gray-100/50 text-white rounded-full text-base sm:text-sm '>Buscar</button>
    </form>
    </div>
  )
}
