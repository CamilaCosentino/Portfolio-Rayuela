import React from 'react'
import { useParams } from 'react-router-dom'
import info from '../../db/info'
import {SRLWrapper} from 'simple-react-lightbox'
import styled from '@emotion/styled'

const TitleGallery = styled.h3`
text-align:center;
font-size:40px;
font-weight:600;
margin-bottom:40px
`
function GalleryImg({e}) {
    const {id} = useParams()


    const idEncontrado =  info.filter((doc,idx)=>{
     return doc.id === +id
  
   
         
        
        
        
        })
        return (
            <SRLWrapper>
        {idEncontrado.map((e) =>{
  return <div key={e.id}>

      <div className="container-fluid">
        <TitleGallery>Galeria de imagenes</TitleGallery>
        <div className="row mt-4 mx-auto gallery">
          <div className="item col-md-6 mb-4">
            <a href={e.img1} className="fancybox" data-fancybox="gallery">
              <img src={e.img1} width="100%" height="100%" alt={e.title} />
              </a>
          </div>
          <div className="item  col-md-6 mb-4">
            <a href={e.img2} className="fancybox" data-fancybox="gallery">
              <img src={e.img2} width="100%" height="100%" alt={e.title} />
              </a>
          </div>
          <div className="item  col-md-6 mb-4">
          <a data-fancybox="gallery" href={e.img1}>
              <img src={e.img3} width="100%" height="100%" alt={e.title} />
              </a>
          </div>
          <div className="item  col-md-6 mb-4">
            <a href={e.img4} className="fancybox" data-fancybox="gallery1">
              <img src={e.img4} width="100%" height="100%" alt={e.title} />
              </a>
          </div>
        </div>
          </div>
           
    </div>

  
        })
      
})
</SRLWrapper>
        )
}

export default GalleryImg
