import React from 'react'
import Slider from './Splider'

export const Post = () => {

    const icons = {
      perfil : './iconos/perfil.jpg',
      user: './iconos/user.svg',
      heart:'./iconos/heart.svg',
      message:'./iconos/message.svg',
      edit:'./iconos/pen.svg',
      share:'./iconos/share.svg',
      message:'./iconos/message.svg',
      dots_vertical :'./iconos/dots-vertical.svg',

    }

   


  return (
    <div className="post my-4 mx-2 ">
        {/* <!--POST HEADER--> */}
        <div className="post__header grid grid-cols-2 ">
        
            <div	className="post__header-profile  flex ">
            <img src={`${ icons.perfil }`} alt="Renzo Marangon" className="mr-2 rounded-full w-12 self-center drop-shadow-md" />
            <p className="self-center w-40 absolute ml-20">Renzo Marangon</p>
            </div>       
            <div className="post__header-time flex items-center  justify-self-end mx-4">
                <p>6 min.</p>
                <button className='w-12 sm:w-3 opacity-75 ml-2'> <img className='' src={ `${process.env.PUBLIC_URL + icons.dots_vertical }` } /> </button>
                
            </div>
        </div>
        
        {/* <!--POST MAIN--> */}
        <div className="post__main h-44">

            <p>Este es un proyesto</p>

            <div key={'eeeeeeeeeeeee'} className='col-span-2 sm:col-span-1 sm:row-span-1 w-full  '>
              {/* <img className='w-full h-full object-fill' src={`${process.env.PUBLIC_URL + image}`} alt="Slide" /> */}
            </div>
        </div>
        
        {/* <!--POST FOOTER--> */}
        <div className="post__footer ml-14 flex items-center justify-around w-1/6">
          <button><img className='w-4' src={`${process.env.PUBLIC_URL + icons.heart}`} /></button>
          <button><img className='w-4' src={`${process.env.PUBLIC_URL + icons.message}`} /></button>
          <button><img className='w-4' src={`${process.env.PUBLIC_URL + icons.share}`} /></button>
        </div>
    </div>
  )
}
