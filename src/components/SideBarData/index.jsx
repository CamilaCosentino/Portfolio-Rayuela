import React from 'react'
import * as FaIcons from 'react-icons/fa'

export const SidebarData = [
    {
        title: 'Quienes somos',
        path: "/about",
        icon:<FaIcons.FaInfo />
    },
    {
        title: 'Portfolio',
        path: "#",
        icon:<FaIcons.FaFolder />,
        iconClosed: <FaIcons.FaAngleDown />,
        iconOpened: <FaIcons.FaAngleUp />,
        subMenu:[
         {
            title: 'Diseño Gráfico',
            path: "/portfolio/categories/diseño",
            

         },
         {
            title: 'Motion Graphics',
            path: "/portfolio/categories/motion",
            

         },
         {
            title: 'Programación',
            path: "/portfolio/categories/programacion",
            

         },
         {
            title: 'Modelado 3D',
            path: "/portfolio/categories/modelado",
            

         },

        ]


        },
        {
            title: 'Contacto',
            path: "/contacto",
            icon: <FaIcons.FaMailBulk />

         },
    
]