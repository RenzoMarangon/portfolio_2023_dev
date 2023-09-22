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
    perPage: 1, // Número de elementos por página
  };

  return (
    <div className="slider-container w-1/4 h-1/4 " >
      <Splide options={splideOptions} className='container ' >
        {
        images.map( image =>
        {
            return(
                <SplideSlide className='rounded shadow'>
                    <img src={`${process.env.PUBLIC_URL + '/iconos/' + image}`} alt="Slide" className='rounded shadow'/>
                </SplideSlide>
            )
        })
        }
      </Splide>
    </div>
  );
};

export default Slider;