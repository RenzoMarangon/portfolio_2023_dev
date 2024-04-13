import React, { useRef, useState } from 'react'
import { icons,skills } from '../helpers/icons.json';
import Skill from './Skill';
import { useStorex } from '../helpers/store';

export const SkillContainer = () => {


  const [follows, setFollows ] = useState( useStorex().follows );


  const cambiarFollows = ( newFollows ) => { setFollows(newFollows) };


  return (
        <div className={` relative side__container-skills flex flex-col text-xs  sm:h-full items-left pt-2 overflow-y-auto`} id='overflow' >

                {Object.keys( skills ).map( (skill) => {
                
                return <Skill icon={icons[skill]} skill={ skill } follows={ follows }  cambiarFollows={ cambiarFollows } key={skills[skill]} />

                })}
        </div>
  )
}
