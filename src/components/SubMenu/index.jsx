import React,{useState}from 'react'
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'
const SidebarLink = styled(Link)`
    display:flex;
    color:#FFC900;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    list-style:none;
    height:60px;
    text-decoration:none;
    font-size:18px;
    :hover{
    background: #00B197;
    border-left:4px solid #FF5A13;
    cursor:pointer;
    color:#fff
    }
`
const SideBarLabel = styled.span`
margin-left:15px;

`;

const DropDownLink = styled(Link)`
    background:#3D032E;
    height: 60px;
    padding-left: 3rem;
    display:flex;
    align-items:center;
    color:#FFC900;
    font-size:18px;
    text-decoration:none;
    :hover{
  
        background:#7B328F;
        cursor:pointer;
        color:#fff
    
  }
    
`
export default function Submenu ({item,index}){
    const [submenu , setsubmenu] = useState(false)
    const showSubmenu = () =>{
        setsubmenu(!submenu)
    }
return (

    <>
        <SidebarLink to={item.path} onClick={item.subMenu && showSubmenu}>
<div>
{item.icon}
<SideBarLabel>{item.title}</SideBarLabel>
</div>
<div>
  { item.subMenu && submenu ? item.iconOpened : item.subMenu ? item.iconClosed : null}  
</div>

        
        </SidebarLink>
        {submenu && item.subMenu.map((item,index) =>{
        return (<DropDownLink to={item.path} key={index}>
            <SideBarLabel>{item.title}</SideBarLabel>
        </DropDownLink>)
        }
        
        )}
    </>
)
}