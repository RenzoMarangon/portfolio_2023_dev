import React, { useState } from "react";
import { mostrarAlerta, obtenerFollows, guardarFollows, limpiarNombresDeSkill } from "../helpers/functions";
import { useStorex} from "../helpers/store";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Skill = ( {icon, skill, follows, cambiarFollows, scroll} ) => {
  
  
  let skillName = skill;

  skillName = limpiarNombresDeSkill(skillName);


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

        <button >
        <LazyLoadImage
                  alt={skillName}
                  height={'55px'}
                  src={icon} // use normal <img> attributes as props
                  width={'100%'}
                  effect="blur"
                  className=' col-span-1 ml-2 w-9/12  shadow p-1 rounded-full hover:shadow'/>
              
        </button>

        <p className="font-bold col-span-2 text-base sm:text-xs">{ skillName }</p>

        <button onClick={ seguir }  className="px-2 py-1 hover:bg-gray-100/50 hover:shadow rounded-full text-white col-span-1 right-1 absolute text-sm sm:text-xs ">

          {btnText}

        </button>
      </div>


     );
}

export default Skill;