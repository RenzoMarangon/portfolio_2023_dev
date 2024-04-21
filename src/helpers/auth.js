import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "./firebase";
import { mostrarAlerta } from "./functions";
import JSAlert from "js-alert";
import { UseContextStore } from "../context/ContextStore";
import { useContext } from "react";
import { obtenerGuardadosFireStore } from "./firestore";
import { proyectosLimpios } from "./proyects.json";


const provider = new GoogleAuthProvider();

const auth = getAuth(firebaseApp);
auth.useDeviceLanguage();


export const obtenerUsuario = () => 
{

  if (auth.currentUser === null) {
    return null;
  }

  const {displayName, photoURL, email} = auth.currentUser;

  const user = { displayName, photoURL, email}

  localStorage.setItem( 'user' , JSON.stringify( user ) );

  return user;

 
}


export const iniciarSesion = (setUser ) =>
{

  const u = obtenerUsuario()

  if( u === null)
  {
    signInWithPopup(auth, provider)
    .then((result) => {
      
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      const { email, displayName, photoURL} = result.user;
     
      const user = {  email, displayName, photoURL}
  
      setUser( user );
      localStorage.setItem('user', JSON.stringify(user));

      return user;
  
    })
    .catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      
      const email = error.customData.email;
      
      const credential = GoogleAuthProvider.credentialFromError(error);
      

    });

  }else{
    
    setUser(u);
  }

  
}


export const cerrarSesion = (setUser, setGuardados) => {
  auth.signOut()
    .then(() => {
      JSAlert.alert("", "Sesión cerrada con éxito",JSAlert.Icons.Success,"Aceptar");

      localStorage.removeItem('user');
      setUser( null );
      setGuardados( proyectosLimpios );

    })
    .catch((error) => {
      // Error al cerrar sesión
      JSAlert.alert("", "Error al cerrar sesión:",JSAlert.Icons.Failed,"Aceptar");

      console.error('Error sesion: ', error);
    });
};



