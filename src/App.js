import logo from './logo.svg';
import './App.css';
import Skill from './Skill_brand';
import { useState } from 'react';


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
      edit :'./iconos/pen.svg',
      dots_vertical :'./iconos/dots-vertical.svg',
      share :'./iconos/share.svg',
      message :'./iconos/message.svg',

    });

    const [skillName, setSkillName ] = useState('');

    const [ viewAllItems, setViewAllItems] = useState(false);

    const viewItems = () =>
    {
      setViewAllItems( !viewAllItems );
    }

  return (
    <body className=''>
      <main className="w-full h-screen  sm:h-50 flex flex-col  sm:justify-center items-center sm:h-screen sm:flex-row gap-x-5 text-sm">
        <header className="relative w-5/6 h-16 sm:w-8 sm:h-1/4 my-auto box-content p-2 rounded-xl bg-gray-300/75  flex justify-around items-center sm:flex-col flex-row  ">
          
          
            <button className='w-12 sm:w-6'> <img className='hover:ring-2 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-0' src={ `${process.env.PUBLIC_URL + icons.house }` } /> </button>
            <button className='w-12 sm:w-6'> <img className='hover:ring-2 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-0' src={ `${process.env.PUBLIC_URL + icons.heart }` } /> </button>
            <button className='w-12 sm:w-6'> <img className='hover:ring-2 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-0' src={ `${process.env.PUBLIC_URL + icons.search }` } /> </button>
            <button className='w-12 sm:w-6'> <img className='hover:ring-2 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-0' src={ `${process.env.PUBLIC_URL + icons.edit }` } /> </button>
            <button className='w-12 sm:w-6'> <img className='hover:ring-2 ring-slate-100/50 hover:bg-slate-100/50 rounded-full  p-0 m-0' src={ `${process.env.PUBLIC_URL + icons.user }` } /> </button>
          
         
          {/* FONDO */}
          {/* <div className=' w-full absolute top-0 left-0  h-full z-0 border rounded-xl  backdrop-blur-xsm '></div> */}

        </header>
        
        {/* <!--MAIN--> */}
        <div className="main container flex flex-col sm:grid  grid-cols-1 grid-rows-1 sm:grid-cols-3 box-content w-100 sm:w-5/6 xl:w-2/3 flex h-5/6 ">
          

          <div className="main__container sm:col-span-2 container p-2 pt-4 border sm:rounded-l-xl  bg-gray-300/75 ">
            
            <div className="main__header  grid grid-cols-3 px-4 ">
              
              {/* <!--Foto de perfil--> */}
              <div className="main__profile flex col-span-2">
                <img src={`${icons.amongus}`} alt="Renzo  Marangon" className="mr-4 rounded-full w-7 self-center rounded-full bg-gray-200/75 p-1 box-content" />

                <h2 className="self-center">Invitado</h2>
              </div>
              
              <button className="self-center justify-self-end  px-5 py-1 shadow bg-dark-blue text-white rounded-lg"> Post </button>
              <input type="text" placeholder="Start a thread" className="search col-span-3 p-2 mt-5 bg-gray-600/50 rounded" />
            </div>
            
            <hr className="mt-5" />
            {/* <!--POSTSSSS--> */}
            <div className="main__posts">
              {/* <!--POST--> */}
            <div className="post my-4 mx-2">
                {/* <!--POST HEADER--> */}
                <div className="post__header grid grid-cols-2 ">
              
                  <div	className="post__header-profile static flex ">
                    <img src={`${ icons.perfil }`} alt="Renzo  Marangon" className="mr-2 rounded-full w-12 self-center drop-shadow-md" />
                    <p className="self-center w-40 absolute ml-14">Renzo Marangon</p>
                  </div>       
                  <div className="post__header-time flex items-center  justify-self-end mx-4">
                      <p>6 min.</p>
                      <button className='w-12 sm:w-3 opacity-75 ml-2'> <img className='' src={ `${process.env.PUBLIC_URL + icons.dots_vertical }` } /> </button>
                      
                  </div>
                </div>
              
              {/* <!--POST MAIN--> */}
                <div className="post__main">
                  
                  <p className="ml-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit autem accusantium molestias consequatur et error similique, id nemo, doloremque quod cum. Culpa in porro aperiam, exercitationem itaque veniam obcaecati harum.</p>
                  
                  <img className="ml-14 my-5" src="" alt="Post"/>
                </div>
              
              {/* <!--POST FOOTER--> */}
              <div className="post__footer ml-14">
                <button>Corazon</button>
                <button>Comentario</button>
                <button>Repostre</button>
                <button>Compartir</button>
              </div>
            </div>
            {/* <!--POST--> */}
            
       
            
            </div>
            
          </div>
          
          {/* <!--MAIN ASIDE--> */}
          <div className="h-full  flex flex-col sm:col-span-1 side__container bg-gray-300/75  border-t border-r  sm:rounded-r-xl   pt-1 grid grid-rows-5   sm:h-full">
            {/* <!--MAIN ASIDE TOP--> */}
            <div className="side__container-top row-span-3 p-2 flex flex-col  ">
              
              
                <h4 className="text-center">Sugerencia de tecnologías</h4>

                
            
              {/* <!--SIDE CONTAINER SKILLS--> */}
              <div className={`side__container-skills flex flex-col text-xs h-full ${ viewAllItems ? 'overflow-y-auto' : 'overflow-hidden' }`}>

                {Object.keys(icons).map( (icon) => {

                  const alt = icons[icon].split('/',3)[2].split('.',2)[0];
                  const altMayus = alt.charAt(0).toUpperCase() + alt.slice(1);

                  return <Skill key={icons[icon]} icon={ icons[icon] } skillName={ altMayus }></Skill>
                })
              }
             


              </div>

              <button onClick={ viewItems } className="justify-self-end  self-center px-1   hover:bg-indigo-900/50 text-white rounded">

                { viewAllItems ? 'Ver menos' : 'Ver más'}
              </button>

            </div>
            {/* <!--MAIN ASIDE BOTTOM--> */}
            <div className="side__container-bottom row-span-2 border-t flex flex-col p-2 ">
              
                <h4 className="col-span-2 text-center">Latest work</h4>
            
              
              <div className="work p-2">
                <h4>Title</h4>
                <p>Description</p>
                <img src="" alt="Carrousell" />
              </div>

              <button className="justify-self-end  self-center px-1   hover:bg-indigo-900/50 text-white rounded">View All</button>


            </div>
          </div>
        </div>

      </main>
    </body>
  );
}

export default App;
