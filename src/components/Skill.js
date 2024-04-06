import React, { useState } from "react";
import { mostrarAlerta, obtenerFollows, guardarFollows, limpiarNombresDeSkill } from "../helpers/functions";
import { useStorex} from "../helpers/store";


const Skill = ( {icon, skill, follows, cambiarFollows} ) => {
  
  
  let skillName = skill;

  limpiarNombresDeSkill(skillName)


  const [ btnText, setBtnText ] = useState( `${follows[skill] ? 'Siguiendo' : 'Seguir'}` );

  const { guardarFollowsStore } = useStorex();

  const changeText = (txt) => 
  {
    setBtnText( txt )
  }


  const seguir = ( ) => 
  {
  
      follows[skillName] = !follows[skillName];
      
      // Actualizar el texto del botón en función del nuevo estado
      follows[skillName] ? changeText('Siguiendo') : changeText('Seguir');
  
    
      cambiarFollows(follows);
      guardarFollows(follows);
      guardarFollowsStore(follows);
  
      mostrarAlerta(skillName, follows[skillName],"seguir");
  }

    

    return ( 

      <div className="skill grid grid-cols-4 p-2 items-center ">

        <button onClick={ seguir } >

            <img src={`${ icon }`} alt={ skillName } className="col-span-1 ml-2 w-9/12  shadow p-1 rounded-full  cursor-pointer hover:bg-gray-100/50 hover:shadow"/>
        </button>

        <p className="font-bold col-span-2 text-base sm:text-xs">{ skillName }</p>

        <button onClick={ seguir }  className="px-2 py-1 hover:bg-gray-100/50 hover:shadow rounded-full text-white col-span-1 right-1 absolute text-sm sm:text-xs ">

          {btnText}

        </button>
      </div>


     );
}

export default Skill;