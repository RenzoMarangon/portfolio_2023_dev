import React, { memo, useContext, useEffect, useState } from 'react'
import { guardarLike, obtenerGuardadosFireStore, obtenerProyectosFirebase } from '../helpers/firestore';
import { useStorex } from '../helpers/store';
import Post  from './Post';
import { ProgressCircle } from './ProgressCircle';
import { obtenerUsuarioLocalStorage } from '../helpers/functions';
import { UseContextStore } from '../context/ContextStore';

const PostContainer = memo(function() {

    const [ loading, setLoading ] = useState( true );
    const [ projects, setProjects] = useState( useStorex().projects );
    const {  } = useContext( UseContextStore );


    


    useEffect(()=>{
        obtenerProyectosFirebase(setProjects).then(()=>{
          setLoading(false);
        })
    },[])

  return (
    <div className={`main__posts  ${loading && 'flex justify-center mt-24 mb-96 sm:mb-10 '}`}>

        { loading ? <ProgressCircle /> : projects.map( (p) =>  {
          
                  return <Post project={p} key={p.id} />  
        
        })}
    </div>
  )
});

export default PostContainer;
