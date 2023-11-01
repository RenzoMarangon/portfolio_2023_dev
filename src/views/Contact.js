import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import JSAlert from 'js-alert'
import { icons } from '../helpers/icons.json';

export const Contact = () => {

    const [ send, setSend ] = useState( false );

    const form = useRef();


    const sendForm = (e) => 
    {
        e.preventDefault();

        emailjs.sendForm('gmail_derencito', 'template_vbihllh', form.current, '34-liJ64Zj9Byzmma')
        .then((result) => {
            JSAlert.alert("", "Email enviado con éxito.",JSAlert.Icons.Success,"Aceptar");
            setSend(true);
        }, (error) => {
            JSAlert.alert("", "El email no pudo ser enviado",JSAlert.Icons.Failed,"Aceptar");
        });
        
      
    }


    // const escribirInput = ( e ) =>
    // {
    //     const { name, value } = e.target;
    //     setInputValues({
    //         ...inputValues, [name]:value
    //     })
    // }


    
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

    <form ref={form} onSubmit={ sendForm } className='flex flex-col w-5/6 mx-auto mt-10 p-2 backdrop-blur shadow-xl rounded-xl'>
        {/* <input className='text-black bg-gray-100/70 w-full my-2 py-4 px-2 rounded shadow-lg' name='user_name' type='text' placeholder='Nombre' onChange={ escribirInput } value={ inputValues.user_name } required />

        <input className='text-black bg-gray-100/70 w-full my-2 py-4 px-2 rounded shadow-lg' name='user_email' type='email' placeholder='Email' onChange={ escribirInput } value={ inputValues.user_email } required/>

        <textarea className='text-black bg-gray-100/70 w-full my-2 py-2 px-2 rounded shadow-lg' name='message' type="text" placeholder='Mensaje' onChange={ escribirInput } value={ inputValues.message } required/>

        <input className='self-end justify-self-end box-content my-2 px-2 sm:px-5 py-1 shadow bg-gray-100/50 text-white rounded-full text-base sm:text-sm' type='submit' /> */}



        <input className='text-black bg-gray-100/70 w-full my-2 py-4 px-2 rounded shadow-lg' name='user_name' type='text' placeholder='Nombre'  required />

        <input className='text-black bg-gray-100/70 w-full my-2 py-4 px-2 rounded shadow-lg' name='user_email' type='email' placeholder='Email'   required/>

        <textarea className='text-black bg-gray-100/70 w-full my-2 py-2 px-2 rounded shadow-lg' name='message' type="text" placeholder='Mensaje'   required/>

        {
            send ?
                    (<input className={`self-end justify-self-end box-content my-2 px-2 sm:px-5 py-1 shadow bg-gray-100/50 text-white rounded-full text-base sm:text-sm`} disabled type='submit' />)
                 :
                    (<input className={`self-end justify-self-end box-content my-2 px-2 sm:px-5 py-1 shadow bg-gray-100/50 text-white rounded-full text-base sm:text-sm cursor-pointer`} type='submit' />)
        }               
        </form>


    </div>
  )
}
