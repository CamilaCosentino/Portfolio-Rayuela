import React from "react";
import {
  ContainerAbout,
  TituloAbout,
  ParrafoAbout,
  TitulosS,
  ImageTeam1,
  ImageTeam2,
  ImageTeam3,
  ImageTeam4,
  Nombres,
  Icon,
  InfoC,
  Vinculo,
  ContLista,
  Icon2,
  Icon3, 
  Icon4
  
} from './styles'




function About() {
  return (
    <>
  
      <ContainerAbout className="container">
        <TituloAbout className="titulo"> Quienes Somos</TituloAbout>
        <ParrafoAbout>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          voluptatum officiis distinctio autem dolor quisquam eum nam inventore,
          earum ex consequuntur aut delectus sequi neque aliquid minus quod
          quidem atque. Incidunt expedita neque unde sunt corporis nemo iure,
          blanditiis magnam dolor dolores quod hic odio debitis labore aliquam
          ea ullam. Quam officiis maiores id! Id amet delectus ipsum dolores
          vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur quis alias ipsa porro necessitatibus architecto dolore!
          Quidem corporis perferendis culpa? Voluptates, cumque modi ad quis
          totam cum porro animi obcaecati?
        </ParrafoAbout>
        <TitulosS>Nuestro equipo</TitulosS>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <ImageTeam1></ImageTeam1>
            <Nombres>Camila Lovera</Nombres>
          </div>
          <div className="col-lg-3 col-md-6">
            <ImageTeam2></ImageTeam2>
            <Nombres>Camila Cosentino</Nombres>
          </div>
          <div className="col-lg-3 col-md-6">
            <ImageTeam3></ImageTeam3>
            <Nombres>Clara Foscaldi</Nombres>
          </div>
          <div className="col-lg-3 col-md-6">
            <ImageTeam4></ImageTeam4>
            <Nombres>Antony Llamocuri</Nombres>
          </div>
        </div>
  
    
        <TitulosS>Información </TitulosS>
        <ContLista className="row">
          <InfoC className="col-md-6">
          <Icon className="fas fa-map-marker-alt "></Icon>
            
          
            <Vinculo href="https://www.google.com.ar/maps/place/Av.+Corrientes+2400,+C1046AAO+CABA/@-34.6048824,-58.4028786,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccaec9ad955a1:0x61761f6f91af65e3!8m2!3d-34.6048868!4d-58.4006846" target="_blank">Av. Corrientes 2400, CABA</Vinculo>
          </InfoC>
            
          <InfoC className="col-md-6">
          <Icon2 className="fab fa-instagram-square"></Icon2>
            
          
            <Vinculo href="https://www.instagram.com/rayuela_agencia/" target="_blank" >@rayuela_agencia</Vinculo>
          </InfoC>
         
         </ContLista>
         <ContLista className="row">
          <InfoC className=" col-md-6">
          <Icon3 className="fas fa-envelope"></Icon3>
            
          
          <Vinculo href="mailto:agenciarayuela2021@gmail.com" >agenciarayuela2021@gmail.com</Vinculo>
          </InfoC>
          <InfoC className=" col-md-6">
          <Icon4 className="fab fa-artstation "></Icon4>
            
          
            <Vinculo href="https://rayuela.artstation.com/" target="_blank" > Artstation  Rayuela </Vinculo>
          </InfoC>
            
          
        </ContLista>
      </ContainerAbout>
    </>
  );
}

export default About;
