import React from 'react'
import Slider from './views/Splider'

export const Post = () => {

    const icons = {
      perfil : './iconos/perfil.jpg',
      user: './iconos/user_w.png',
      heart:'./iconos/heart_w.png',
      message:'./iconos/message_w.png',
      edit:'./iconos/pen_w.png',
      share:'./iconos/share_w.png',
      message:'./iconos/message_w.png',
      dots_vertical :'./iconos/dots-vertical_w.png',
      retuit :'./iconos/retuit_w.png',

    }

   


  return (
    <div className="post flex flex-col my-4 mx-2 mb-5 border-b border-gray-100/10 drop-shadow pb-2">
        {/* <!--POST HEADER--> */}
        <div className="post__header grid grid-cols-3  ">
        
            <div	className="post__header-profile col-span-2  flex ">
            <img src={`${ icons.perfil }`} alt="Renzo Marangon" className="mr-2 rounded-full w-12 self-center drop-shadow-md" />
            <p className="self-center w-100 sm:w-40 font-bold text-base sm:text-sm ">Renzo Marangon</p>
            </div>       
            <div className="post__header-time flex items-center  justify-self-end sm:mr-2">
                <p>6 min.</p>
                <button className='w-4 sm:w-3 opacity-75 ml-2'> <img className='' src={ `${process.env.PUBLIC_URL + icons.dots_vertical }` } /> </button>
                
            </div>
        </div>
        
        {/* <!--POST MAIN--> */}
        <div className="post__main p-2 sm:p-4 " >

            <div key={'eeeeeeeeeeeee'} className='col-span-2 sm:col-span-1 sm:row-span-1 w-full  '>
              {/* <img className='w-full h-full object-fill' src={`${process.env.PUBLIC_URL + image}`} alt="Slide" /> */}
              <div className='w-full h-80 bg-pink-300/50 rounded-3xl'>



              </div>
            </div>
        </div>
        
        {/* <!--POST FOOTER--> */}
        <div className=" post__footer ml-5 flex items-center justify-around w-3/6 sm:w-3/12 ">
          <button><img className='w-7 sm:w-5' src={`${process.env.PUBLIC_URL + icons.heart}`} /></button>
          <button><img className='w-7 sm:w-5' src={`${process.env.PUBLIC_URL + icons.message}`} /></button>
          <button><img className='w-7 sm:w-5' src={`${process.env.PUBLIC_URL + icons.retuit}`} /></button>
          <button><img className='w-7 sm:w-5' src={`${process.env.PUBLIC_URL + icons.share}`} /></button>
        </div>
    </div>
  )
}
