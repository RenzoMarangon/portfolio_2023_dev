import React from 'react'

export const AboutMe = () => {

    const perfil = process.env.PUBLIC_URL + './iconos/perfil.jpg';

  return (


    <div className='about-me flex flex-col items-center justify-center'>
        <h2>Acerca de mí</h2>

        <img src={`${ perfil }`} />
        <div>
            <p>lorem</p>

            <h4>Skills</h4>
            <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>Node</li>
                <li>Next.js</li>
                <li>C++</li>
                <li>Git</li>
                <li>Tailwind</li>
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
