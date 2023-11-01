import React, { useEffect, useState } from 'react'
import { EducacionExperiencia } from '../components/EducacionExperiencia'

export const AboutMe = () => {


    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = './cv_renzo_marangon.pdf'; 
        link.download = 'cv_renzo_marangon.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    const icons = {
        perfil : process.env.PUBLIC_URL + './iconos/perfil.png',
        linkedin : process.env.PUBLIC_URL + './iconos/linkedin_w.png',
        github : process.env.PUBLIC_URL + './iconos/github_w.png',
        email : process.env.PUBLIC_URL + './iconos/mail_w.png',
    }

    const [ educExp, setEducExp ] = useState({
        educacion: true,
        experiencia:false
    })


  return (


    <div className='about-me flex flex-col items-center sm:grid grid-cols-2 grid-rows-7 sm:grid-rows-12 w-full h-full overflow-y-auto sm:w-5/6 xl:w-2/3 flex sm:h-5/6 sm:rounded-2xl'>
        <h2 className='my-5 sm:my-0 sm:mt-5  col-span-2 row-span-2  text-center font-bold text-lg '>Acerca de mí</h2>


        <div className='w-100 col-span-1 row-span-4 sm:row-span-5 mx-auto flex flex-col items-center self-start xl:mt-3'>
            <div className='flex justify-center  backdrop-blur-sm rounded-2xl mt-10 sm:mt-2  shadow-lg w-9/12 sm:w-10/12 '>
                <img src={`${ icons.perfil }`} className='w-8/12 items-self-start'  />
            </div>
            


                
            <div className='w-9/12 sm:w-5/12 mt-5 flex justify-around mb-5'>
                <button className='w-8 '><img className=' hover:bg-gray-500 rounded-lg transicion agrandar' src={icons.github} alt="GitHub" /></button>
                <button className='w-8 '><img className='hover:bg-blue-600 rounded-lg transicion agrandar' src={icons.linkedin} alt="LinkedIn" /></button>
                <button className='w-8 '><img className='hover:bg-gray-500/50 rounded-lg transicion agrandar' src={icons.email} alt="Correo Electrónico" /></button>
            </div>

            <p className='w-9/12 sm:w-10/12'>
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestias. Temporibus minus error quo labore ab iure, laborum libero est magni eum officia voluptatem facere architecto eveniet voluptatum alias reprehenderit!
            
            </p>

        </div>



        <div className='col-span-1 row-span-4 sm:row-span-5 flex flex-col self-start mt-5 sm:mt-0 mx-auto w-9/12 '>

            <h4 className=' text-center text-lg italic'>Skills</h4>


            <ul className='flex items-center flex-wrap my-3 '>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>Javascript</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>React</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>Next.js</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>Node</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>Express.js</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>C++</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>Git</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>MongoDB</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>Firebase</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>Socket.io</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>Sass</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>Css</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>Tailwind</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm'>Bootstrap</li>
            </ul>

            
            <EducacionExperiencia educExp={ educExp } setEducExp = { setEducExp } />

            <button className='self-start my-5 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm ' onClick={()=>{downloadFile()}}> Descargar cv</button>


            {/*Espacio para el nav en mobile */}
            <div className='header_space '></div>
        </div>

   
    </div>
  )
}
