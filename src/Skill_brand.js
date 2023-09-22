import React from "react";


const Skill = ( {icon, skillName} ) => {
    return ( 

    <div className="skill flex p-2 items-center justify-between">
        <img src={`${ process.env.PUBLIC_URL + icon }`} alt={ skillName } className="col-span-1 w-2/12 opacity-75"/>
        <p className="col-span-1">{ skillName }</p>
        <button className="col-span-1 px-2 py-1 rounded text-white bg-blue-md ">Seguir</button>
      </div>

     );
}

export default Skill;