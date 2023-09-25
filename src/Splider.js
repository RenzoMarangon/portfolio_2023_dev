import React, { useState } from 'react';
import '@splidejs/splide/dist/css/splide.min.css'; // Importa los estilos de Splide.js
import { Splide, SplideSlide } from '@splidejs/react-splide'; // Importa los componentes de Splide.js
import './Slider.css'; // Importa tus estilos personalizados
import './App.css';

// import perfil from './iconos/perfil.jpg';

const Slider = ({ images }) => {
  const splideOptions = {
    type: 'slide', // Tipo de slider
    rewind: true, // Habilita el rebobinado
    perPage: 2, // Número de elementos por página
  };

  return (
    <div className=" " >
      <Splide options={splideOptions} className='container flex items-center justify-center w-3/4 h-3/4 m-auto' >
        {
        images.map( image =>
        {
            return(
                <SplideSlide className='rounded shadow'>
                    <img src={`${process.env.PUBLIC_URL + '/iconos/' + image}`} alt="Slide" className='mx-1'/>
                </SplideSlide>
            )
        })
        }
      </Splide>
    </div>
  );
};

export default Slider;