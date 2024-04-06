import { toast } from 'alert';
import { icons } from './icons.json';
import { proyectos } from './proyects.json';


export const mostrarAlerta = (skill, estado, tipoAlerta) =>
{
  
    if(tipoAlerta === "seguir") 
    {
        estado ? toast.success(`Siguiendo a ${skill}`) : toast.error(`Ya no seguis a ${skill}`)
    } else if( tipoAlerta === "likear") {
        estado ? toast.success( `Te gusta el proyecto "${skill}"`) : toast.error(`Ya no te gusta el proyecto "${skill}"`)
    }

  
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

export const obtenerLikes = () => 
{
    const proyectos = {
        bolucompras:false,
        navalElectric:false,
        dailyReminder:false,
        flexbox:false,
        cryptojuegos:false,
    }

    let likes = localStorage.getItem("likes");

    if( likes === null)
    {
        likes = proyectos;
        localStorage.setItem("likes", JSON.stringify( likes ));
    }else{

        likes = JSON.parse( likes );
    }

    return likes;
}

export const  guardarLikes = (likes) =>
{
    localStorage.setItem("likes", JSON.stringify( likes ));
}

export const limpiarNombresDeSkill = (skill) => {

    const alt = skill.split('_')[0];
    let skillName = alt.charAt(0).toUpperCase() + alt.slice(1);

    switch( skillName )
    {
        case 'React':
            skillName = "react_logo";
            break;
        case 'Socket':
            skillName = "socket_io";
            break;
        default:
            skillName = skillName.toLowerCase();

    }
}