import React, { memo, useEffect, useState } from 'react'
import { obtenerProyectosFirebase } from '../helpers/firestore';
import { useStorex } from '../helpers/store';
import { Post } from './Post';
import { ProgressCircle } from './ProgressCircle';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

const PostContainer = memo(function() {

    const [ loading, setLoading ] = useState( false );
    const [ projects, setProjects] = useState( useStorex().projects );


    useEffect(()=>{
        obtenerProyectosFirebase(setProjects).then(()=>{
            setLoading(true);
          })
    },[])

  return (
    <div className={`main__posts  ${!loading && 'flex justify-center mt-24 mb-96 sm:mb-10 '}`}>

        { !loading ? <ProgressCircle /> : projects.map( (p) =>  {
        
                  const img = <LazyLoadImage
                  alt={p.id}
                  height={'300px'}
                  src={p.img} // use normal <img> attributes as props
                  width={'100%'}
                  effect="blur"
                  className=' z-1 top-0 w-full h-80 mx-auto  object-cover-center rounded-3xl '/>
          
                  return <Post project={p} key={p.id} img = { img } />  
        
        
        })}
    </div>
  )
});

export default trackWindowScroll(PostContainer);
