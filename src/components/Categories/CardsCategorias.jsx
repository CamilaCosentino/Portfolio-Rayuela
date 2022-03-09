import React from 'react'
import {Link,useParams}from 'react-router-dom'
import info from '../../db/info'

import './styles.css'
function CardsCategorias() {
  const {label} = useParams()
  const CategoryFilter = info.filter((doc)=>{
return doc.label === label
    

  })

 return ( <>
<h2>Categorias</h2>
    {CategoryFilter.map((data) =>{

return <div className='container ' >



<Link to={`/portfolio/${data.id}`} className="cards_container">
   
<div class="card">
  <img src={data.img1} class="card-img-top" alt={data.title}/>
  <div class="card-body">
    <h5 class="card-title">{data.title}</h5>
    <p class="card-text">Categoria: {data.categoria}</p>
   
  </div>
</div>
    </Link>
    
   </div> 
  })}
  </>
 )

}
 
export default CardsCategorias
