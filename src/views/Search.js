import React, { useState } from 'react'


export const Search = () => {

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

    
  }

  return (
    <div className='search w-full h-full sm:h-5/6 sm:w-5/6 xl:w-2/3 sm:rounded-2xl'>

    <form onSubmit={ sendForm } className='flex justify-between w-11/12 mx-auto '>
        <input className='text-black bg-gray-100/70  my-2 py-4 px-2 rounded shadow-lg w-10/12' name='search' type='text' placeholder='Buscar' onChange={ escribirInput } value={ inputValues.search } required />
        <button onClick={()=>{sendForm()}} className='self-end justify-self-end box-content my-2 px-2 sm:px-4 py-1.5 shadow bg-gray-100/50 text-white rounded-full text-base sm:text-sm '>Buscar</button>
    </form>
    </div>
  )
}
