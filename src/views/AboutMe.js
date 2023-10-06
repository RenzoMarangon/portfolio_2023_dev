import React from 'react'

export const AboutMe = () => {

    const perfil = process.env.PUBLIC_URL + './iconos/perfil.jpg';

  return (


    <div className='about-me grid grid-cols-3 grid-rows-6  w-full h-full sm:w-5/6 xl:w-2/3 flex sm:h-5/6 sm:rounded-2xl'>
        <div className='col-span-1 row-span-1'></div>
        <h2 className='col-span-2 row-span-1 self-center font-bold text-lg'>Acerca de mí</h2>

        <img src={`${ perfil }`} className='rounded-2xl shadow-md w-100 w-10/12 col-span-1 justify-self-center'  />
        <div className='col-span-2 flex flex-col items-left'>
            <p>lorem</p>

            <h4>Skills</h4>

            <ul className='flex w-4/5  items-center flex-wrap'>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow'>Javascript</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow'>React</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow'>Node</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow'>Next.js</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow'>C++</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow'>Git</li>
                <li className='m-1 px-2 py-1 rounded-full bg-gray-100/25 shadow'>Tailwind</li>
            </ul>

            <div>
                <button>Educación</button>
                <button>Experiencia</button>

                <ul>
                    <li>Cosa1</li>
                    <li>Cosa2</li>
                    <li>Cosa3</li>
                </ul>

                <button> Descargar cv</button>
            </div>
        </div>
    </div>
  )
}
