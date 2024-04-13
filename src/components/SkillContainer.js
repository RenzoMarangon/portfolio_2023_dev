import React, { useRef, useState } from 'react'
import { icons,skills } from '../helpers/icons.json';
import Skill from './Skill';
import { useStorex } from '../helpers/store';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

const SkillContainer = () => {


  const [follows, setFollows ] = useState( useStorex().follows );


  const cambiarFollows = ( newFollows ) => { setFollows(newFollows) };


  return (
        <div className={` relative side__container-skills flex flex-col text-xs  sm:h-full items-left pt-2 overflow-y-auto`} id='overflow' >

                {Object.keys( skills ).map( (skill) => {
                

                const img = <LazyLoadImage
                              alt={skill}
                              height={'55px'}
                              src={icons[skill]} // use normal <img> attributes as props
                              width={'100%'}
                              effect="blur"
                              className=' col-span-1 ml-2 w-9/12  shadow p-1 rounded-full hover:shadow'/>


                return <Skill img={img} skill={ skill } follows={ follows }  cambiarFollows={ cambiarFollows } key={skills[skill]} />

                })}
        </div>
  )
}

export default trackWindowScroll(SkillContainer);
