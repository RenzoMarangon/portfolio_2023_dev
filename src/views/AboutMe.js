import React from 'react'

export const AboutMe = () => {

    const perfil = process.env.PUBLIC_URL + './iconos/perfil.png';

  return (


    <div className='about-me flex flex-col items-center sm:grid grid-cols-2 grid-rows-7  w-full h-full overflow-y-auto sm:w-5/6 xl:w-2/3 flex sm:h-5/6 sm:rounded-2xl'>
        <h2 className='my-5 sm:my-0  col-span-2 row-span-2  text-center font-bold text-lg'>Acerca de mí</h2>


        <div className='w-100 col-span-1 row-span-4  mx-auto flex flex-col items-center self-start xl:mt-3'>
            <div className='flex justify-center  backdrop-blur-sm rounded-2xl mt-10  shadow-lg w-9/12 sm:w-10/12 '>
                <img src={`${ perfil }`} className='w-8/12 items-self-start'  />
                
            </div>
            
            <p className='w-9/12 sm:w-10/12 mt-5'>lorem ipsum</p>
        </div>



        <div className='col-span-1 row-span-4 flex flex-col items-center mx-auto w-9/12'>

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

            <div className='exp_educ backdrop-blur rounded-xl shadow-lg p-2 self-start'>
                <button>Educación</button>
                <button>Experiencia</button>

                <ul className='border border-transparent'>
                    <li className=''>
                        <p className='text-pink'>2023 - 2025</p>
                        <p className='font-bold text-wh'>UTN - Universidad Tecnológica Nacional</p>
                        <p >Técnico Universitario en Sistemas</p>
                    </li>
                    <li className=''>
                        <p className='text-pink'>2020 - 2021</p>
                        <p className='font-bold text-wh'>UNGS - Universidad Nacional General Sarmiento</p>
                        <p >Técnico Universitario en Informática</p>
                    </li>
                    <li className=''>
                        <p className='text-pink'>2016 - 2020</p>
                        <p className='font-bold text-wh'>CONSUDEC</p>
                        <p >Profesor Superior en Informática</p>
                    </li>
                    <li className=''>
                        <p className='text-pink'>2021 - 2022</p>
                        <p className='font-bold text-wh'>Coderhouse</p>
                        <p>Desarrollador Web FrontEnd</p>
                    </li>
                    <li className=''>
                        <p className='text-pink'>2022</p>
                        <p className='font-bold text-wh'>EducacionIT</p>
                        <p>Desarrollador backend en Node.js</p>
                    </li>
       
                </ul>

            </div>

            <button className='row-span-1 self-start my-5 px-2 py-1 rounded-full bg-gray-100/25 shadow backdrop-blur-sm '> Descargar cv</button>

            {/*Espacio para el header */}
            <div className='header_space '></div>
        </div>

   
    </div>
  )
}
