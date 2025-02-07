import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Inventory",
            name:"Inventory",
            icon:<FaUserAlt/>
        },
        {
            path:"/Orders",
            name:"Orders",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Returns",
            name:"Returns",
            icon:<FaCommentAlt/>
        },
        {
            path:"/Customers",
            name:"Customers",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Shipping",
            name:"Shipping",
            icon:<FaThList/>
        },
        {
            path:"/Channels",
            name:"Channels",
            icon:<FaThList/>
        },
        {
            path:"/Integrations",
            name:"Integrations",
            icon:<FaThList/>
        },
        {
            path:"/Calculations",
            name:"Calculations",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;