import { toast } from 'alert';
import { icons, skills } from './icons.json';
import { proyectos } from './proyects.json';


export const mostrarAlerta = (skill, estado, tipoAlerta) =>
{
    if(tipoAlerta === "seguir") 
    {
        estado ? toast.success(`Siguiendo a ${skill}`) : toast.error(`Ya no seguis a ${skill}`)
    } else if( tipoAlerta === "likear") {
        estado ? toast.success( `Te gusta el proyecto "${skill}"`) : toast.error(`Ya no te gusta el proyecto "${skill}"`)
    }else if( tipoAlerta === "guardar")
    {
        estado ? toast.success( `Guardaste el proyecto "${skill}"`) : toast.error(`"${skill}" se quitó de los guardados`)

    }
}

export const obtenerFollows = () => 
{
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
    }else{

        likes = JSON.parse( likes );
    }

    return likes;
}

export const  guardarGuardados = (guardados) =>
{
    localStorage.setItem("guardados", JSON.stringify( guardados ));
}


export const obtenerGuardados = async() => 
{
    const proyectos = {
        bolucompras:false,
        navalElectric:false,
        dailyReminder:false,
        flexbox:false,
        cryptojuegos:false,
    }

    let guardados = localStorage.getItem("guardados");

    if( guardados === null)
    {
        guardados = proyectos;
        localStorage.setItem("guardados", JSON.stringify( guardados ));
    }else{

        guardados = JSON.parse( guardados );
    }

    return guardados;
    

}

export const  guardarLikes = (likes) =>
{
}

export const limpiarNombresDeSkill = (skill) => {

    const alt = skill.split('_')[0];

    let skillName = alt.charAt(0).toUpperCase() + alt.slice(1);

    skillName === 'Cpp' && (skillName = 'C++');
    

    return skillName;

}

export const buscarProyecto = (id) => 
{
    const proyecto = proyectos.filter( ( pr ) => { if( pr.id === id) return pr });

    return proyecto[0];

}

export const obtenerProyectos = () =>
{
    let projects = JSON.parse(localStorage.getItem('projects'));

    return projects;
}

export const obtenerUsuarioLocalStorage = () => {

    let user = JSON.parse(localStorage.getItem('user'))
    
    
    return user;
}

