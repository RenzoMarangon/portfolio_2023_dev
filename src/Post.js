import React from 'react'

import Modal from 'react-modal';

export const Post = ({proyect}) => {

    const icons = {
      perfil : './iconos/perfil.png',
      user: './iconos/user_w.png',
      heart:'./iconos/heart_w.png',
      message:'./iconos/message_w.png',
      edit:'./iconos/pen_w.png',
      share:'./iconos/share_w.png',
      message:'./iconos/message_w.png',
      dots_vertical :'./iconos/dots-vertical_w.png',
      retuit :'./iconos/retuit_w.png',

    }

    

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
   
    function closeModal() {
      setIsOpen(false);
    }

   
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
                <button className='w-4 sm:w-3 opacity-75 ml-2'> <img className='' src={ `${process.env.PUBLIC_URL + icons.dots_vertical }` } /> </button>
                
            </div>
        </div>
        
        {/* <!--POST MAIN--> */}
        <div className="post__main p-2 sm:p-4 " >

            <div key={'eeeeeeeeeeeee'} className={`relative w-100 h-80 col-span-2 sm:col-span-1 sm:row-span-1 w-full`}>

              <img onClick={()=>{openModal()}} className=' z-1 top-0 h-80 mx-auto  object-cover-center rounded-3xl' src={`${proyect.img}`} alt={`${proyect.title}`} />         

            </div>
        </div>
        
        {/* <!--POST FOOTER--> */}
        <div className=" post__footer ml-5 flex items-center justify-around w-3/6 sm:w-3/12 ">
          <button><img className='w-7 sm:w-5' src={`${process.env.PUBLIC_URL + icons.heart}`} /></button>
          <button><img className='w-7 sm:w-5' src={`${process.env.PUBLIC_URL + icons.message}`} /></button>
          <button><img className='w-7 sm:w-5' src={`${process.env.PUBLIC_URL + icons.retuit}`} /></button>
          <button><img className='w-7 sm:w-5' src={`${process.env.PUBLIC_URL + icons.share}`} /></button>
        </div>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={' h-full bg-gray-700/25 flex items-center justify-center'}
      >
        <div className='modalEstilo '>
          <button id='close' className='rounded-full w-10 h-10 bg-red-500/75 text-white text-bold' onClick={closeModal}>X</button>
          <img className='w-11/12 rounded-xl' src={`${proyect.img}`} alt={`${proyect.title}`}/>
          <h2 className='text-lg text-bold'>{proyect.title}</h2>
          <p>{proyect.description}</p>
          <p>Tecnologías usadas: {proyect.techs}</p>
          <div>
            <a>Demo</a>
            <a>Código</a>
          </div>
        </div>
      </Modal>
    
      
    </div>
  )
}
