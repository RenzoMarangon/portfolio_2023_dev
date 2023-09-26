import React from "react";


const Skill = ( {icon, skillName} ) => {
    return ( 

    <div className="skill grid grid-cols-6 p-2 items-center ">
        <img src={`${ process.env.PUBLIC_URL + icon }`} alt={ skillName } className="col-span-2 ml-2 p-1 w-6/12 opacity-75 bg-gray-100/50 p-1 rounded-full shadow"/>
        <p className=" col-span-3">{ skillName }</p>
        <button className="px-2 py-1 hover:bg-gray-100/50 rounded-full text-white col-span-1 right-1 absolute opacity-100 sm:opacity-0 lg:opacity-100">Seguir</button>
      </div>

     );
}

export default Skill;