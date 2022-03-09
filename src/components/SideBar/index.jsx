import React ,{ useState }from 'react'
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import {DataP} from "../../db/info"
import { SidebarData } from '../SideBarData';
import Submenu from '../SubMenu';
const Container = styled.div`
z-index:3;
position: fixed;
    
    width:100%;
    heigth:50px;
    background: #3D032E;
    position: fixed;
    display:flex;
    flex-direction:row;
    justify-content:space-between
`
const Nav = styled.div`
    padding:20px 0;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    
    

`;

const NavIcons = styled(Link)`
    margin-right:6rem;
    font-size:1.6rem;
    float:right;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    color:#FFC900;
   


    `





const SideBarNav = styled.nav`
    background: #3D032E;
    width:250px;
    height: 100%;
    display:flex;
    justify-content: center;
    position:fixed;
    top:100px;
    right: ${({sidebar}) => (sidebar ? '0':"-100%")};
    transition: 600ms;
    z-index:3;

`
const SideNavWrap = styled.div`
    margin-top:40px;
    width:100%
`
const LogoContainer = styled.img`
height:100px;

display:flex;
justify-content: flex-start;
align-items: center;
color:#fff;
margin:20px 0 20px 100px;
z-index:4

`
export default  function Sidebar (){
    const [sidebar, setsidebar] = useState(false)
    const showSideBar = () =>{
        setsidebar(!sidebar)
    }
return (
    <Container>
        <Link to="/">
       
       <LogoContainer src={DataP.logo.src} alt="" />
       </Link>
 <Nav>
    
     
    
    <NavIcons to="#">
        <FaIcons.FaBars onClick={showSideBar} />

    </NavIcons>
 
    
     
 </Nav>
 <SideBarNav sidebar={sidebar}>
    <SideNavWrap>
    
    {SidebarData.map((item,index) => {
        return <Submenu item={item} key={index}/>
        
    })}
    </SideNavWrap>
 </SideBarNav>
    </Container>
)

}