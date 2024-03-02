import React, {useState} from 'react'

import {Modalx} from './components/Modalx';
import { icons } from './helpers/icons.json';



export const Post = ({proyect}) => {

  const [visible, setVisible] = useState(false)

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
  return (
    <div className="post flex flex-col my-4 mx-2 mb-4 border-b border-gray-100/10 drop-shadow pb-5">
        {/* <!--POST HEADER--> */}
        <div className="post__header grid grid-cols-3  ">
        
            <div	className="post__header-profile col-span-2  flex ">
            <img src={`${ icons.perfil }`} alt="Renzo Marangon" className="mr-2 rounded-full w-14 self-center drop-shadow-md shadow-lg border border-gray-700/5" />
            <p className="self-center ml-3 sm:w-40 font-bold text-base sm:text-sm ">Renzo Marangon</p>
            </div>       
            <div className="post__header-time flex items-center  justify-self-end sm:mr-2">
                <p>6 min.</p>
                <button className='w-4 sm:w-3 opacity-75 ml-2'> <img className='' src={ `${icons.dots_vertical }` } /> </button>
                
            </div>
        </div>
        
        {/* <!--POST MAIN--> */}
        <div className="post__main p-2 sm:p-4 " >

            <div key={'eeeeeeeeeeeee'} className={`relative w-100 h-80 col-span-2 sm:col-span-1 sm:row-span-1 w-full`}>

              <img onClick={()=>{handleClickOpen(true)}} className=' z-1 top-0 w-9/12 h-80 mx-auto  object-cover-center rounded-3xl cursor-pointer' src={`${proyect.img}`} alt={`${proyect.title}`} />         

            </div>

        <Modalx  handleClose={ handleClose } open={ open } proyect = { proyect } />

        </div>
        
        {/* <!--POST FOOTER--> */}
        <div className=" post__footer ml-5 flex items-center justify-around w-3/6 sm:w-3/12 ">
          <button><img className='w-7 sm:w-5' src={`${icons.heart}`} /></button>
          <button><img className='w-7 sm:w-5' src={`${icons.message}`} /></button>
          <button><img className='w-7 sm:w-5' src={`${icons.retuit}`} /></button>
          <button><img className='w-7 sm:w-5' src={`${icons.share}`} /></button>
        </div>

      
    </div>
  )
}
