import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import info from '../../db/info'
import GalleryImg from '../GalleryLight/GalleryImg'

import Sidebar from '../SideBar'
import './styles.css'
import Modal from '@mui/material/Modal';

import styled from '@emotion/styled'


const VideoModal = styled.video`
width:100%
`



function  WorkDetails() {
    const {id} = useParams()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

  const idEncontrado =  info.filter((doc,idx)=>{
   return doc.id === +id

 
       
      
      
      
      })
      console.log(idEncontrado);
  return (

    <>
   
      
      {idEncontrado.map((e,item,idx) =>{
        return <div key={e.id}> 
        
          <div className='datos contendido mx-auto'>
          <div className="videoContainer">
          
    

      

          <video src={e.videoPath}   autoPlay loop muted ></video>
         
          
          </div>
          
       <div className="popBefore">
       <button onClick={handleOpen}>  <i className='fas fa-play'></i></button>


     
      
       </div>
       </div>

            <div className="  container" id='datos'>
              <div className="row mx-auto datosgif">

                <div className="col-md-6 col-sm-12">
                <h2>{e.title}</h2>
                <span>{e.categoria}</span>
                <p>{e.description}</p>
                </div>

                <div className="col-md-6 col-sm-12">
                
                <img src={e.gifPath} className="img-fluid" alt="gifNaruto" />
                </div>
                </div>
                </div>
                
                <Modal
      open={open}
      onClose={handleClose}
     
    >


      <div className='videoM container'>
      <VideoModal src={e.videoPath} controls></VideoModal>
      </div>
    
    </Modal>   
        </div>


      })}
      <GalleryImg/>
   
    </>
  )

 
      
        

  
}

export default WorkDetails
