import logo from './logo.svg';
import './App.css';
import Skill from './Skill_brand';
import { useEffect, useState } from 'react';
import { Post } from './Post';


// console.log(icons.javascript.split('/',3)[2].split('.',2)[0]);



function App() {

  const [icons, setIcons] = useState(
    {
      react_logo : './iconos/react.png',
      javascript : './iconos/javascript.png',
      nextjs : './iconos/nextjs.png',
      node : './iconos/nodejs.png',
      cpp : './iconos/cpp.png',
      mongodb : './iconos/mongodb.png',
      npm : './iconos/npm.png',
      tailwind : './iconos/tailwind.png',
      sass : './iconos/sass.png',
      socket_io : './iconos/socket-io.png',
      git : './iconos/git.png',
      css3 : './iconos/css3.png',
      bootstrap : './iconos/bootstrap.png',
      firebase : './iconos/firebase.png',
      perfil : './iconos/perfil.jpg',
      amongus : './iconos/among-us.png',
      Skill : './iconos/Skill_brand.png',
      user : './iconos/user.svg',
      house :'./iconos/house.svg',
      heart :'./iconos/heart.svg',
      search :'./iconos/search.svg',
      dots_vertical :'./iconos/dots-vertical.svg',
      edit :'./iconos/pen.svg',

    });


    const skills = 
    {
      react_logo : './iconos/react.png',
      javascript : './iconos/javascript.png',
      nextjs : './iconos/nextjs.png',
      node : './iconos/nodejs.png',
      cpp : './iconos/cpp.png',
      mongodb : './iconos/mongodb.png',
      git : './iconos/git.png',
      firebase : './iconos/firebase.png',
      tailwind : './iconos/tailwind.png',
      npm : './iconos/npm.png',
      sass : './iconos/sass.png',
      socket_io : './iconos/socket-io.png',
      css3 : './iconos/css3.png',
      bootstrap : './iconos/bootstrap.png',
    }


  return (
    <body className=''>
      <main className="w-full h-screen  sm:h-50 flex flex-col  sm:justify-center items-center sm:h-screen sm:flex-row gap-x-5 text-sm ">
        <header className="header relative w-5/6 h-16 sm:h-2/5 sm:w-12 sm:p-0 my-auto box-content p-2 rounded-full    flex justify-around items-center sm:flex-col flex-row  ">
          
          
            <button className='w-12 sm:w-6 '> <img className='hover:ring-2 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-0' src={ `${process.env.PUBLIC_URL + icons.house }` } /> </button>
            <button className='w-12 sm:w-6 '> <img className='hover:ring-2 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-0' src={ `${process.env.PUBLIC_URL + icons.heart }` } /> </button>
            <button className='w-12 sm:w-6 '> <img className='hover:ring-2 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-0' src={ `${process.env.PUBLIC_URL + icons.search }` } /> </button>
            <button className='w-12 sm:w-6 '> <img className='hover:ring-2 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-0' src={ `${process.env.PUBLIC_URL + icons.edit }` } /> </button>
            <button className='w-12 sm:w-6 '> <img className='hover:ring-2 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-0' src={ `${process.env.PUBLIC_URL + icons.user }` } /> </button>
          
         
          {/* FONDO */}
          {/* <div className=' w-full absolute top-0 left-0  h-full z-0 border rounded-xl  backdrop-blur-xsm '></div> */}

        </header>
        
        {/* <!--MAIN--> */}
        <div className="main container flex flex-col sm:grid  grid-cols-1 grid-rows-1 sm:grid-cols-4 box-content w-100 sm:w-5/6 xl:w-2/3 flex h-5/6 ">
          

          <div className="main__container sm:col-span-3 container p-2 pt-4   sm:rounded-l-full    ">
            
            <div className="main__header  grid grid-cols-1 px-4 ">
              
              {/* <!--Foto de perfil--> */}
              <div className="main__profile flex col-span-2">
                <img src={`${icons.amongus}`} alt="Invitado" className="mr-4 w-7 self-center rounded-full bg-gray-200/75 p-1 box-content" />

                <h2 className="self-center ml-2">Invitado</h2>
              </div>
              
              <button className="self-center justify-self-end  px-5 py-1 shadow bg-gray-100/50 text-white rounded-full"> Post </button>
              <input type="text" placeholder="¿En qué piensas?" className="search col-span-3 p-2 mt-5 outline-none text-black shadow bg-gray-100/50 rounded w-full" />
            </div>
            
            <hr className="mt-5 borde" />
            
            {/* <!--POSTSSSS--> */}
            <div className="main__posts">
   
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



                {Object.keys( skills ).map( (icon) => {

                  const alt = icons[icon].split('/',3)[2].split('.',2)[0];
                  const altMayus = alt.charAt(0).toUpperCase() + alt.slice(1);

                  return <Skill key={icons[icon]} icon={ icons[icon] } skillName={ altMayus }></Skill>
                })
              }
             
               

              </div>

         

            </div>
            {/* <!--MAIN ASIDE BOTTOM--> */}
            <div className="side__container-bottom row-span-2   flex flex-col p-2 ">
              
                <h4 className="col-span-2 text-center">Último proyecto</h4>
            
              
              <div className="work p-2">
                <h4>Title</h4>
                <p>Description</p>
                <img src="" alt="Carrousell" />
              </div>

              <button className="justify-self-end  self-center px-2 py-1 rounded-full  bg-indigo-100/50 text-white rounded">Ver todos</button>


            </div>
          </div>
        </div>

      </main>
    </body>
  );
}

export default App;
