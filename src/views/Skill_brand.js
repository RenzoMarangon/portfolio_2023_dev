import React from "react";
import { Toaster, toast } from 'alert';


const Skill = ( {icon, skillName} ) => {

    const mostrarAlerta = () =>
    {
      toast.success('Siguiendo')
    }

    return ( 

      <div className="skill grid grid-cols-4 p-2 items-center ">
        <Toaster/>

        <img src={`${ process.env.PUBLIC_URL + icon }`} alt={ skillName } className="col-span-1 ml-2  w-9/12 shadow p-1 rounded-full "/>
        <p className="font-bold col-span-2 text-base sm:text-xs">{ skillName }</p>
        <button onClick={()=>{mostrarAlerta()}} className="px-2 py-1 hover:bg-gray-100/50 hover:shadow rounded-full text-white col-span-1 right-1 absolute text-sm sm:text-xs ">Seguir</button>

      </div>


     );
}

export default Skill;