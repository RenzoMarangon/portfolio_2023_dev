import { useState } from "react";

import { doc, setDoc,  collection, addDoc, getDocs, getDoc } from "firebase/firestore";
import JSAlert from "js-alert";

import { firestore } from "./firebase";
import { useStorex } from '../helpers/store';
import { obtenerUsuarioLocalStorage } from "./functions";





export const bolucompras = {
    title: "Bolucompras",
    techs: 'JavaScript React Firebase SASS CSS HTML',
    description: 'E-commerce realizado con React y Firebase para la autenticación de usuarios y el backend.',
    site:'https://bolucompras.netlify.app/',
    img:'https://res.cloudinary.com/derznxjam/image/upload/v1699486018/portfolio/bolucompras_dfuplp.jpg',
    id:'bolucompras',
    comentarios:{},
    guardados:{},
    likes:{},
  }

export const navalElectric ={
    title: "Naval Electric",
    techs: 'JavaScript SASS CSS HTML',
    description: 'Sitio web realizado para Naval Electric, una empresa que realiza instalaciones eléctricas en barcos',
    site:'https://post-itx-app.netlify.app/',
    img:'https://res.cloudinary.com/derznxjam/image/upload/v1699486019/portfolio/naval-electric_zfzuud.jpg',
    id:'navalElectric',
    comentarios:{},
    guardados:{},
    likes:{},
  }
 export const dailyReminder ={
    title: "Daily reminder",
    techs: 'JavaScript bootstrap CSS HTML React redux Firebase',
    description: 'Sitio web para guardar recordatorios y notas.',
    site:'https://post-itx-app.netlify.app/',
    img:'https://res.cloudinary.com/derznxjam/image/upload/v1699486353/portfolio/daily-remember_bssyrq.jpg',
    id:'dailyReminder',
    comentarios:{},
    guardados:{},
    likes:{},
  }
 export const flexbox ={
    title:"Introducción a Flexbox",
    techs:'JavaScript bootstrap CSS HTML',
    description:"Sitio web realizado a modo de tutorial para aprender lo basico de Flexbox",
    site:'https://introduccion-a-flexbox.netlify.app/',
    img:'https://res.cloudinary.com/derznxjam/image/upload/v1699486019/portfolio/int-a-flexbox_q6bepg.jpg',
    id:'flexbox',
    comentarios:{},
    guardados:{},
    likes:{},
  }
 export const cryptojuegos ={
    title: "Cryptojuegos",
    techs: 'JavaScript SASS CSS HTML',
    description: 'Sitio web sobre juegos de temática cripto para ganar dinero',
    site:'https://cryptojuegos.netlify.app/',
    img:'https://res.cloudinary.com/derznxjam/image/upload/v1699489254/portfolio/cryptojuegos_pymwwl.jpg',
    id:'cryptojuegos',
    comentarios:{},
    guardados:{},
    likes:{},
  }


export const guardarProyectos = async (project) =>
{


    try {

        await setDoc(doc(firestore, "projects", `${cryptojuegos.id}`), 
            cryptojuegos
        );

        await setDoc(doc(firestore, "projects", `${bolucompras.id}`), 
            bolucompras
        );

        await setDoc(doc(firestore, "projects", `${navalElectric.id}`), 
            navalElectric
        );

        await setDoc(doc(firestore, "projects", `${dailyReminder.id}`), 
            dailyReminder
        );

        await setDoc(doc(firestore, "projects", `${flexbox.id}`), 
            flexbox
        );

        // const cityRef = doc(firestore, 'projects', `${project.id}`);

        // const comentario = {text:'texto',id:'12423'}


        // await setDoc(cityRef, { comentarios: { comentario : {text:'texto',id:'12423'} } }, { merge: true });


    } catch (error) {
        console.error('Error fetching categorias: ', error);
    }
}



  
export const guardarComentario = async (project, comment) =>
{

    const user = obtenerUsuarioLocalStorage();
    comment.photoURL = user.photoURL;
    comment.displayName = user.displayName;

    try {
    

        await setDoc(doc(firestore, "projects", `${project.id}`), 
        {comentarios:{[comment.id]:comment}},{ merge: true });

        JSAlert.alert("", "Comentario realizado con éxito",JSAlert.Icons.Success,"Aceptar");
        
      } catch (error) {
        
        JSAlert.alert("", "Necesitas iniciar sesión para comentar",JSAlert.Icons.Failed,"Aceptar");
        

      }
}

export const obtenerProyecto = async( project) =>{

    const docRef = doc(firestore, "projects", `${project.id}`);


    const proyecto = await getDoc(docRef);

    return proyecto.data();




}


export const obtenerProyectosFirebase = async () =>
{
  try {
    const itemCollection = collection( firestore, 'projects' );
    const projects = await getDocs(itemCollection);

    let prjts = [];

    projects.docs.map( (project) =>{

        let proj = project.data();

        proj.id= project.id;

        prjts = [...prjts, proj ]

        

        return proj;
    })


    localStorage.setItem('projects',JSON.stringify(prjts))


    return prjts;

  } catch (error) {
    console.log(error)
  }

}

