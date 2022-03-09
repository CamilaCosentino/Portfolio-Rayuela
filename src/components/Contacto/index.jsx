import React from 'react'

import {
ContactContainer,
ArcContact,
TitleContact,
RectanguloG,
Ubicacion,
TitleS,
Redes,
LinkC,
Link,
Icon,
RectanguloC,
Label,
Form,
RectanguloG2,
Btn,
BtnS,
LabelM


}from './styles'



function Contacto() {
  return (
    <div>
      <ContactContainer className='container'>
           <ArcContact className='row'>
           <TitleContact className='col'>
                Contacto
                </TitleContact>
           </ArcContact>
            <RectanguloG className='row'>
                <Ubicacion className='col-md-6 col-sm-12 '>
                    <TitleS>
                    Ubicación
                    </TitleS>
                  
                    <LinkC><Link href="">Corrientes 2400, CABA</Link></LinkC>
                    </Ubicacion>
                <Redes className='col-md-6'>
                <TitleS>
              Seguinos
                </TitleS>
                <LinkC> <Icon className="fab fa-instagram-square"></Icon> </LinkC>
                </Redes>
            </RectanguloG>
          
                <Form action="" method="post" className='col'>
                <RectanguloC className='row'>
                  <Label>Nombre</Label>
                  <br />
                <input type="text" />
              
                
                <Label>Email</Label>
                <br />
           
                <input type="text" />  
                </RectanguloC>
              <RectanguloG2>
              <LabelM>Mensaje</LabelM>
              <br />
                <textarea name="" id="" cols="70" rows="10"></textarea>
              </RectanguloG2>
                </Form>
            <Btn className='row'>
              <BtnS type="submit" className='btn btn-success btn-sm'>Envia</BtnS>
            </Btn>
      </ContactContainer>
    </div>
  )
}

export default Contacto
