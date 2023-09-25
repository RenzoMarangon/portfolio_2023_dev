import React from 'react'
import Slider from './Splider'

export const Post = () => {

    const icons = {
      perfil : './iconos/perfil.jpg',
      user: './iconos/user.svg',
      heart:'./iconos/heart.svg',
      message:'./iconos/message.svg'
    }

    const images = [

     ]

    const iconx = [
      './iconos/pen.svg',
      './iconos/share.svg',
      './iconos/message.svg',
    ]
  return (
    <div className="post my-4 mx-2 ">
        {/* <!--POST HEADER--> */}
        <div className="post__header grid grid-cols-2 ">
        
            <div	className="post__header-profile  flex ">
            <img src={`${ icons.perfil }`} alt="Renzo  Marangon" className="mr-2 rounded-full w-12 self-center drop-shadow-md" />
            <p className="self-center w-40 absolute ml-14">Renzo Marangon</p>
            </div>       
            <div className="post__header-time flex items-center  justify-self-end mx-4">
                <p>6 min.</p>
                <button className='w-12 sm:w-3 opacity-75 ml-2'> <img className='' src={ `${process.env.PUBLIC_URL + icons.dots_vertical }` } /> </button>
                
            </div>
        </div>
        
        {/* <!--POST MAIN--> */}
        <div className="post__main flex items-center justify-center  ">
            
            <Slider  images={ images }  />

        </div>
        
        {/* <!--POST FOOTER--> */}
        <div className="post__footer ml-14">
        <button><img src={`${process.env.PUBLIC_URL + iconx.heart}`} /></button>
        <button>Comentario</button>
        <button>Repostre</button>
        <button>Compartir</button>
        </div>
    </div>
  )
}
