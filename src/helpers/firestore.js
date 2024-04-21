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
    img:'https://res.cloudinary.com/derznxjam/image/upload/f_auto,q_auto/v1/portfolio/unp5tmstwros0uj51d8a',
    imgResponsive:'https://res.cloudinary.com/derznxjam/image/upload/f_auto,q_auto/v1/portfolio/kg8uwqcvez7whowhl9bo',
    id:'bolucompras',
    comentarios:{},
    guardados:{},
    likes:{},
  }

export const navalElectric ={
    title: "Naval Electric",
    techs: 'JavaScript SASS CSS HTML',
    description: 'Sitio web realizado para Naval Electric, una empresa que realiza instalaciones eléctricas en barcos',
    site:'https://naval-electric.com.ar/',
    img:'https://res.cloudinary.com/derznxjam/image/upload/f_auto,q_auto/v1/portfolio/mps1gkxjykijtid1ea1q',
    imgResponsive:'https://res.cloudinary.com/derznxjam/image/upload/f_auto,q_auto/v1/portfolio/lv9wbuyigbgetvof1ocf',
    id:'navalElectric',
    comentarios:{},
    guardados:{},
    likes:{},
  }

 export const flexbox ={
    title:"Introducción a Flexbox",
    techs:'JavaScript bootstrap CSS HTML',
    description:"Sitio web realizado a modo de tutorial para aprender lo basico de Flexbox",
    site:'https://introduccion-a-flexbox.netlify.app/',
    img:'https://res.cloudinary.com/derznxjam/image/upload/f_auto,q_auto/v1/portfolio/zvuv3gnq9lmy89osgtqo',
    imgResponsive:'https://res.cloudinary.com/derznxjam/image/upload/f_auto,q_auto/v1/portfolio/bdarevlknu0qu2von3wt',
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
    img:'https://res.cloudinary.com/derznxjam/image/upload/f_auto,q_auto/v1/portfolio/hqfseqzgkqxbsnbq8e8p',
    imgResponsive:'https://res.cloudinary.com/derznxjam/image/upload/f_auto,q_auto/v1/portfolio/iyksetcyssbgk9459e87',
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



export const guardarLike = async (project, like ) =>
{
  const user = obtenerUsuarioLocalStorage();

 if(user){
  try {

    await setDoc(doc(firestore, "projects",  `${project.id}`),

    {likes:{[user.email]:like}},{merge:true});

    return like;

  } catch (error) {
    JSAlert.alert("", "Necesitas iniciar sesión para dar like",JSAlert.Icons.Failed,"Aceptar");
  }

 }else{

    JSAlert.alert("", "Necesitas iniciar sesión para dar like",JSAlert.Icons.Failed,"Aceptar");
 }

}

export const obtenerProyecto = async( project ) =>{

    const docRef = doc(firestore, "projects", `${project.id}`);

    const proyecto = await getDoc(docRef);

    return proyecto.data();

}


export const obtenerProyectosFirebase = async (setProjects) =>
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

    setProjects(prjts);


    return prjts;

  } catch (error) {
    console.log(error)
  }

}


export const obtenerGuardadosFireStore = async(user, setGuardados ) =>{
  
  const guardados = {
    bolucompras:false,
    navalElectric:false,
    flexbox:false,
    cryptojuegos:false,
                      }


    try {
      let guardadosDB = await getDocs( collection( firestore, 'guardados' ))
      
      guardadosDB.forEach((guardado)=>{
        
        if( user )
        {
          let data = Object.entries(guardado.data());
      
          if(data.length > 0 ){
            if( data[0][0]===user.email)
            {
              guardados[ guardado.id ] = data[0][1]
            }
          }
      }

    })
    } catch (error) {
      console.log(error)
    }
    
    setGuardados( guardados );
    return guardados
  
    
  
  
}

export const obtenerLikesFirestore = async() =>
{

  
}

export const guardarProyectoUsuario = async( project, user, state) =>
{
  await setDoc(doc(firestore, "guardados",  `${project.id}`),

  {[user.email]:state},{merge:true});


  // guardados[guardado.id] = Object.values(guardado.data())[0];

  //     setGuardados( guardados );

  //     console.log(guardados)

}

export const guardarGuardadosFirestore = async(project, guardado) =>
{
  const user = obtenerUsuarioLocalStorage();

  if(user){
   try {
 
     await setDoc(doc(firestore, "projects",  `${project.id}`),
 
     {guardados:{[user.email]:guardado}},{merge:true});
 
     return guardado;
 
   } catch (error) {
     JSAlert.alert("", "Necesitas iniciar sesión para guardar el proyecto",JSAlert.Icons.Failed,"Aceptar");
   }
 
  }else{
 
     JSAlert.alert("", "Necesitas iniciar sesión para guardar el proyecto",JSAlert.Icons.Failed,"Aceptar");
  }
}

export const limpiarGuardados = async()=>{

  const bolucompras = await setDoc(doc(firestore, "guardados",  'bolucompras'),
  {})
  const navalElectric = await setDoc(doc(firestore, "guardados",  'navalElectric'),
  {})
  const flexbox = await setDoc(doc(firestore, "guardados",  'flexbox'),
  {})
  const cryptojuegos = await setDoc(doc(firestore, "guardados",  'cryptojuegos'),
  {})

  Promise.all([bolucompras, navalElectric, flexbox, cryptojuegos])

}
