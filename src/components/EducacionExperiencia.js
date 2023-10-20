
export const EducacionExperiencia = ({ educExp, setEducExp }) => {

    const cambiarEducExp = ( educacionExperiencia ) => 
    {
        const nuevoEducExp = { educExp }

        for( const key of Object.keys(educExp) )
        {
            key === educacionExperiencia 
                                        ? nuevoEducExp[key] = true
                                        : nuevoEducExp[key] = false
        }

        setEducExp( nuevoEducExp )
    }

    return(
        <div className='exp_educ backdrop-blur rounded-xl shadow-lg p-2 self-start '>
            <button onClick={()=>{cambiarEducExp('educacion') }} className={`m-2 px-2 py-1 rounded-full ${ educExp.educacion && 'bg-gray-100/25' }`}>Educación</button>
            <button onClick={()=>{cambiarEducExp('experiencia')}} className={`m-2 px-2 py-1 rounded-full ${ educExp.experiencia && 'bg-gray-100/25' }`}>Experiencia</button>

            {
                educExp.educacion &&
                (<ul className='border border-transparent '>
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
                </ul>)
            }

            {
                educExp.experiencia &&
                (<ul className='border border-transparent '>
                    <li className=''>
                        <p className='text-pink'>2023 - 2025</p>
                        <p className='font-bold text-wh'>Google</p>
                        <p >El mas piola de la oficina</p>
                    </li>

                    <li className=''>
                        <p className='text-pink'>2023 - 2025</p>
                        <p className='font-bold text-wh'>Google</p>
                        <p >El mas piola de la oficina</p>
                    </li>

             
                </ul>)
            }

        </div>
    )
};