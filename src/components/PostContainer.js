import React, { memo, useEffect, useState } from 'react'
import { obtenerProyectosFirebase } from '../helpers/firestore';
import { useStorex } from '../helpers/store';
import { Post } from './Post';
import { ProgressCircle } from './ProgressCircle';

export const PostContainer = memo(function() {

    const [ loading, setLoading ] = useState( false );
    const [ projects, setProjects] = useState( useStorex().projects );


    useEffect(()=>{
        obtenerProyectosFirebase(setProjects).then(()=>{
            setLoading(true);
          })
    },[])

  return (
    <div className={`main__posts ${!loading && 'flex justify-center mt-10'}`} >
        { !loading ? <ProgressCircle /> : projects.map( (p) =>  (<Post project={p} key={p.id} />  ))}
    </div>
  )
});
