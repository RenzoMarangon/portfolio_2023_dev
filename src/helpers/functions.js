import { toast } from 'alert';





export const mostrarAlerta = (skill, state) =>
{
    


  state ? toast.success(`Siguiendo a ${skill}`) : toast.success(`Ya no seguis a ${skill}`)
  
}

export const obtenerFollows = () => 
{

    const skills = 
    {
      react_logo : false,
      javascript : false,
      nextjs : false,
      node : false,
      cpp : false,
      mongodb : false,
      git : false,
      firebase : false,
      tailwind : false,
      npm : false,
      sass : false,
      socket_io : false,
      css3 : false,
      bootstrap : false,
    }

    let follows = localStorage.getItem("follows");

    if( follows === null)
    {
        follows = skills;
        localStorage.setItem("follows", JSON.stringify( skills ));
    }else{

        follows = JSON.parse( follows );
    }

    return follows;
}

export const  guardarFollows = (skills) =>
{

    
    localStorage.setItem("follows", JSON.stringify( skills ));
}

export const limpiarNombresDeSkill = (skill) => {
  switch( skill )
  {
      case 'React':
          skill = "react_logo";
          break;
      case 'Socket':
          skill = "socket_io";
          break;
      default:
          skill = skill.toLowerCase();

  }
}