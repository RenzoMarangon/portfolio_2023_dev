
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
        <div className='backdrop-blur rounded-xl shadow-lg p-2 self-start w-11/12'>
            <button onClick={()=>{cambiarEducExp('educacion') }} className={`m-2 px-2 py-1 rounded-full ${ educExp.educacion && 'bg-gray-100/25' }`}>Educación</button>
            <button onClick={()=>{cambiarEducExp('experiencia')}} className={`m-2 px-2 py-1 rounded-full ${ educExp.experiencia && 'bg-gray-100/25' }`}>Experiencia</button>

            {
                educExp.educacion &&
                (<ul className=' educ border border-transparent '>
                    <li className=''>
                        <p className='text-pink'>2023 - Actualidad</p>
                        <p className='font-bold text-wh pl-2'>UTN - Universidad Tecnológica Nacional</p>
                        <p className="pl-4">Técnico Universitario en Programación</p>
                    </li>
                    <li className=''>
                        <p className='text-pink'>2020 - 2021</p>
                        <p className='font-bold text-wh pl-2'>UNGS - Universidad Nacional General Sarmiento</p>
                        <p className="pl-4" >Técnico Universitario en Informática</p>
                    </li>
                    <li className=''>
                        <p className='text-pink'>2016 - 2020</p>
                        <p className='font-bold text-wh pl-2'>CONSUDEC</p>
                        <p className="pl-4" >Profesor Superior en Informática</p>
                    </li>
                    <li className=''>
                        <p className='text-pink'>2021 - 2022</p>
                        <p className='font-bold text-wh pl-2'>Coderhouse</p>
                        <p className="pl-5">Desarrollador Web FrontEnd</p>
                    </li>
                </ul>)
            }

            {
                educExp.experiencia &&
                (<ul className='exp border border-transparent '>

                    <li className=''>
                        <p className='text-pink'>Analista de Ecommerce / Frontend developer</p>
                        <p className='font-bold text-wh pl-2'> Nexina S.A. / 2024 - actualidad</p>

                        <div >
                            <p  className="pl-4 my-2">
                                 Actualización y mantenimiento del sitio web en WordPress, 
                                incluyendo la carga de productos, gestión de inventarios y 
                                actualización de información.
                            </p>
                        
                            <p  className="pl-4 mb-2">
                                Responsable de la creación y optimización de 
                                publicaciones en Mercado Libre y otros marketplace.
                            </p>

                            <p  className="pl-4 mb-2">
                                Preparación de envios a FULL según análisis de venta.
                            </p>

                        </div>
                    </li>

                    <li className=''>
                        <p className='text-pink'>Encargado de medios de apoyo tecnológicos y 
                        pedagógicos</p>
                        <p className='font-bold text-wh pl-2'>E.E.S. Nº 28 / 2022 - 2024</p>
                        <div >
                            <p  className="pl-4 my-2">
                                Responsable del mantenimiento y reparación de equipos 
                                informáticos de los alumnos y del establecimiento.
                            </p>
                        
                            <p  className="pl-4 mb-2">
                                Encargado de la carga y alta de datos de alumnos en la 
                                plataforma digital.
                            </p>
                        </div>

                    </li>

                    <li className=''>
                        <p className='text-pink'>Analista ecommerce</p>
                        <p className='font-bold text-wh pl-2'> Serviprof / 2021 - 2022</p>
                        <div >
                            
                            <p  className="pl-4 my-2">
                                Encargado de actualizar y gestionar precios en la base de 
                                datos de la empresa.
                            </p>
                        
                            <p  className="pl-4 mb-2">
                                Responsable de la creación y optimización de 
                                publicaciones en Mercado Libre.
                            </p>

                            <p className="pl-4 mb-2">
                                Preparación de envios a FULL según análisis de venta.
                            </p>

                            <p className="pl-4">
                                Responsable del mantenimiento y reparación de equipos 
                                informáticos.
                            </p>
                        </div>
                    </li>

             
             
                </ul>)
            }

        </div>
    )
};