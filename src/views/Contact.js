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
    <div className='contact w-100 h-5/6 xl:w-2/3 rounded-2xl '>

    <h2>Contacto</h2>

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

    <form onSubmit={ sendForm }>
        <input className='text-black' name='nombre' type='text' placeholder='Nombre' onChange={ escribirInput } value={ inputValues.nombre } />
        <input className='text-black' name='asunto' type='text' placeholder='Asunto' onChange={ escribirInput } value={ inputValues.asunto } />
        <input className='text-black' name='nombre' type='email' placeholder='Email' onChange={ escribirInput } value={ inputValues.email } />
        <textarea />
        <input type='submit'/>
    </form>


    </div>
  )
}
