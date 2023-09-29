import React from 'react'
import Skill from './Skill_brand';
import { useEffect, useState } from 'react';
import { Post } from './Post';

export const Home = () => {

    const [icons, setIcons] = useState(
        {
          react_logo : './iconos/react_w.png',
          javascript : './iconos/javascript_w.png',
          nextjs : './iconos/nextjs_w.png',
          node : './iconos/nodejs_w.png',
          cpp : './iconos/cpp_w.png',
          mongodb : './iconos/mongodb_w.png',
          npm : './iconos/npm_w.png',
          tailwind : './iconos/tailwind_w.png',
          sass : './iconos/sass_w.png',
          socket_io : './iconos/socket-io_w.png',
          git : './iconos/git_w.png',
          css3 : './iconos/css3_w.png',
          bootstrap : './iconos/bootstrap_w.png',
          firebase : './iconos/firebase_w.png',
          perfil : './iconos/perfil.jpg',
          amongus : './iconos/among-us_w.png',
          retuit : './iconos/retuit_w.png',
          user : './iconos/user.png',
          image: './iconos/photo_w.png',
          gif: './iconos/gif_w.png',
          emoji: './iconos/emoji_w.png',
          pin: './iconos/map-pin_w.png',
    
        });
    
    
        const [skills, setSkills] = useState(
        {
          react_logo : './iconos/react_w.png',
          javascript : './iconos/javascript_w.png',
          nextjs : './iconos/nextjs_w.png',
          node : './iconos/nodejs_w.png',
          cpp : './iconos/cpp_w.png',
          mongodb : './iconos/mongodb_w.png',
          git : './iconos/git_w.png',
          firebase : './iconos/firebase_w.png',
          tailwind : './iconos/tailwind_w.png',
          npm : './iconos/npm_w.png',
          sass : './iconos/sass_w.png',
          socket_io : './iconos/socket-io_w.png',
          css3 : './iconos/css3_w.png',
          bootstrap : './iconos/bootstrap_w.png',
        });
    

  return (
    <>
        
        {/* <!--MAIN--> */}
        <div className="main container flex flex-col sm:grid  grid-cols-1 grid-rows-1 sm:grid-cols-4 box-content w-100 sm:w-5/6 xl:w-2/3 flex h-5/6 ">
          

          <div className="main__container sm:col-span-3 container p-2 pt-4   overflow-auto    ">
            
            <div className="main__header flex flex-col">
              
              <div className='grid  grid-cols-10 mb-4 '>
                <img src={`${icons.user}`} alt="Invitado" className="col-span-1 w-10 p-1 mr-2 rounded-full shadow bg-gray-100/50 self-center justify-self-center" />
                <input type="text" placeholder="¿En qué piensas?" className="col-span-9  search col-span-3 px-3 py-5 mt-1 outline-none text-black shadow bg-gray-100/50 rounded w-full" />
              </div>


              {/* BUTTONS */}
              <div className='grid  grid-cols-10'>
                <div className='col-span-1'></div>

                <div className='flex col-span-9 items-center justify-between'>

                  <div className='w-40 flex justify-between'>

                  <button>
                    <img src={`${icons.image}`} alt="Upload image" className=" w-6 rounded-full " />
                  </button>
                  <button>
                    <img src={`${icons.gif}`} alt="Gif" className=" w-6 rounded-full " />
                  </button>
                  <button>
                    <img src={`${icons.emoji}`} alt="Invitado" className=" w-6 rounded-full " />
                  </button>
                  <button>
                    <img src={`${icons.pin}`} alt="Invitado" className=" w-6 rounded-full " />
                  </button>
                  </div>

                  <button className="self-center justify-self-end  px-5 py-1 shadow bg-gray-100/50 text-white rounded-full"> Post </button>

                </div>


              </div>

            </div>
            
            <hr className="mt-5 borde" />
            
            {/* <!--POSTSSSS--> */}
            <div className="main__posts ">
   
              <Post />
              <Post />
            </div>
            
          </div>
          
          {/* <!--MAIN ASIDE--> */}
          <div className="main-aside h-full  flex flex-col sm:col-span-1 side__container sm:rounded-r-xl  pt-1 grid grid-rows-6 ">
            {/* <!--MAIN ASIDE TOP--> */}
            <div className="side__container-top row-span-2 sm:row-span-4 p-2 flex flex-col  ">
              
              
                <h4 className="text-center">Sugerencia de tecnologías</h4>

                
            
              {/* <!--SIDE CONTAINER SKILLS--> */}
              <div className={` relative side__container-skills flex flex-col text-xs h-full items-left pt-2 overflow-y-auto`}>



                {Object.keys( skills ).map( (skill) => {

                  const alt = skills[skill].split('/',3)[2].split('.',2)[0].split('_')[0];
                  const altMayus = alt.charAt(0).toUpperCase() + alt.slice(1);

                  return <Skill key={skills[skill]} icon={skills[skill]} skillName={ altMayus }></Skill>
                })
              }
             
               

              </div>

         

            </div>
            {/* <!--MAIN ASIDE BOTTOM--> */}
            <div className="side__container-bottom row-span-2   flex flex-col p-2 ">
              
                <h4 className="col-span-2 text-center">Último proyecto</h4>
            
              
              <div className="work p-2 bg-pink-300/50 h-full w-11/12 m-auto rounded-2xl">
                
              </div>

              <button className="justify-self-end  self-center px-2 py-1 rounded-full  hover:bg-indigo-100/50 hover:shadow text-white rounded">Ver todos</button>


            </div>
          </div>
        </div>
    </>
  )
}
