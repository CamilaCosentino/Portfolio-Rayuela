import React from 'react';
import './styles.css';
import CardItem from './items';

function Cards() {
  return (
    <div className='cards  mx-auto' id='portfolio'>
      <h2>Portfolio</h2>
      <div className='cards__container'>
        <div className='cards__wrapper  '>
          <ul className='cards__items '>
            <CardItem 
              id = "1"
              src='./../res/DISEÑO/NARUTO/Copia de KURAMA-01-01-01.jpg'
              text='Retrato vectorial de Naruto y Kurama'
              label='Diseño Gráfico'
              path='/portfolio/1'
              
            />
            <CardItem 
              id = "2"
              src='res/MOTION/POKEMON/fotos/POKEMON-foto3.png'
              text='Pokémon Parallax'
              label='Motion Graphic'
              path='/portfolio/2'
            />
             <CardItem 
              id="3"
              src='res/3D 2/BUNKER/fotos/BUNKER-foto2.png'
              text='The Men of Letters bunker'
              label='Modelado 3D'
              path='/portfolio/3'
            />
            <CardItem 
              id="4"
              src='res/PROGRAMACÍON/Restaurant/fotos/MAQUINA VIDEJUEGO-foto2.png'
              text='Videojuego Café'
              label='Programación'
              path='/portfolio/4'
            />
          </ul>
        
          <ul className='cards__items'>
            <CardItem
              id = "5"
              src='/res/MOTION/CIERVO/fotos/ciervo-foto1.png'
              text='VFX Ciervo con Mariposas'
              label='Motion Graphic'
              path='/portfolio/5'
            />
            <CardItem
              id = "6"
              src='/res/DISEÑO/KANEKI KEN/fotos/Copia de ken-kaneki-01.jpg'
              text='Dibujo digital del Personaje Kaneki Ken'
              label='Diseño Gráfico'
              path='/portfolio/6'
            />
             <CardItem
              id="7"
              src='../../res/PROGRAMACÍON/Tapas/fotos/TAPAS-foto1.jpg'
              text='App Evento De Tapas'
              label='Programación'
              path='/portfolio/7'
            />
            <CardItem
              id="8"
              src='/res/3D 2/CATEDRAL/Captura de pantalla243.png'
              text='Catedral'
              label='Modelado 3D'
              path='/portfolio/8'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              id = "9"
              src='res/Porfolio/3d'
              text='Cuarto Embrujado'
              label='Modelado 3D'
              path='/portfolio/9'
            />
            <CardItem
              id = "10"
              src='res/Porfolio/Programación'
              text='Adivinanzas'
              label='Programación'
              path='/portfolio/10'
            />
             <CardItem
              id="11"
              src='../../res/DISEÑO/ANIMALES/fotos/Copia de Conejo_Mesa de trabajo 1.png'
              text='Pieza Ilustrativa de un conejo'
              label='Diseño Gráfico'
              path='/portfolio/11'
            />
            <CardItem
              id="12"
              src='../../res/MOTION/PAPAS/fotos/latas-foto1.png'
              text='Video Publicitario de Papas'
              label='Motion Graphic'
              path='/portfolio/12'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              id = "13"
              src='../../res/PROGRAMACÍON/Vodkapp/fotos/vodkapp-foto1.png'
              text='Vodkaapp'
              label='Programación'
              path='/portfolio/13'
            />
            
             <CardItem
              id="14"
              src='res/Porfolio/3d'
              text='Máquina de Escribir'
              label='Modelado 3D'
              path='/portfolio/14'
            />
            <CardItem
              id = "15"
              src='../../res/MOTION/PANAMERICANOS/fotos/PANAMERICANOS-FOTOS1.png'
              text='Mapping Juegos Panamericanos'
              label='Motion Graphic'
              path='/portfolio/15'
            />
            <CardItem
              id="16"
              src='../../res/DISEÑO/PANTENE/fotos/Copia de PANTENE-arreglado.jpg'
              text='Fotomontaje Publicitario de Pantene'
              label='Diseño Gráfico'
              path='/portfolio/16'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              id = "17"
              src='res/Porfolio/Diseño/Copia de Pieza 3.jpg'
              text='Fotomontaje WWT'
              label='Diseño Gráfico'
              path='/portfolio/17'
            />
            <CardItem
              id = "18"
              src='res/MOTION/DRAGÓN/fotos/dragon-foto3.png'
              text='VFX Estatua Dragón'
              label='Motion Graphic'
              path='/portfolio/18'
            />
             <CardItem
              id="19"
              src='res/Porfolio/3d'
              text='Puente'
              label='Modelado 3D'
              path='/portfolio/19'
            />
            <CardItem
              id="20"
              src='res/Porfolio/Programación'
              text='Juego AV'
              label='Adventure'
              path='/portfolio/20'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;




