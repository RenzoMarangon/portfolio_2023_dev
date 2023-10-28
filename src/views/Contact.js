import React, { useState } from 'react'

export const Contact = () => {

    const sendForm = (e) => 
    {
        e.preventDefault();
      
    }

    const [ inputValues, setInputValues ] = useState({
        nombre:'',
        asunto:'',
        email:'',
        mensaje:''
    })

    const escribirInput = ( e ) =>
    {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues, [name]:value
        })
    }

  return (
    <div className='contact w-full h-full sm:h-5/6 sm:w-5/6 xl:w-2/3  sm:rounded-2xl '>

    <h2 className='text-xl font-bold text-center text-gray-100 my-5'>Contacto</h2>

    <div className='w-5/6 mx-auto'>
        <div>
            <h4>Email</h4>
            <p>renzomarangon@gmail.com</p>
        </div>

        <div>
            <h4>LinkedIn</h4>
            <p>linkedin</p>
        </div>

        <div>
            <h4>Github</h4>
            <p>github</p>
        </div>
    </div>

    <form onSubmit={ sendForm } className='flex flex-col w-5/6 mx-auto mt-10 p-2 backdrop-blur shadow-xl rounded-xl'>
        <input className='text-black bg-gray-100/70 w-full my-2 py-4 px-2 rounded shadow-lg' name='nombre' type='text' placeholder='Nombre' onChange={ escribirInput } value={ inputValues.nombre } required />
        <input className='text-black bg-gray-100/70 w-full my-2 py-4 px-2 rounded shadow-lg' name='asunto' type='text' placeholder='Asunto' onChange={ escribirInput } value={ inputValues.asunto } required/>
        <input className='text-black bg-gray-100/70 w-full my-2 py-4 px-2 rounded shadow-lg' name='nombre' type='email' placeholder='Email' onChange={ escribirInput } value={ inputValues.email } required/>
        <textarea className='text-black bg-gray-100/70 w-full my-2 py-2 px-2 rounded shadow-lg' name='mensaje' type="text" placeholder='Mensaje' onChange={ escribirInput } value={ inputValues.mensaje } required/>
        <input className='self-end justify-self-end box-content my-2 px-2 sm:px-5 py-1 shadow bg-gray-100/50 text-white rounded-full text-base sm:text-sm' type='submit' />
    </form>


    </div>
  )
}
