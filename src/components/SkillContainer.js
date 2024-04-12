import React, { useState } from 'react'
import { icons,skills } from '../helpers/icons.json';
import Skill from './Skill';
import { useStorex } from '../helpers/store';
import LazyLoad from 'react-lazyload';

export const SkillContainer = () => {


  const [follows, setFollows ] = useState( useStorex().follows );


  const cambiarFollows = ( newFollows ) => { setFollows(newFollows) };


  return (
        <div className={` relative side__container-skills flex flex-col text-xs h-100 sm:h-full items-left pt-2 overflow-y-auto`}  id="overflow">

        <LazyLoad height={100} offset={100} scrollContainer="#overflow">

            {Object.keys( skills ).map( (skill) => {
                
                return <Skill icon={icons[skill]} skill={ skill } follows={ follows }  cambiarFollows={ cambiarFollows } key={skills[skill]} />

                })}
        </LazyLoad>
        </div>
  )
}
