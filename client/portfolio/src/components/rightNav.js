import React, {useState,} from 'react';
import './styles/CSS/Constants/NavigationBar/NavigationBar.css';
import menue from '../images/menue.png';
import close from '../images/close.png';
function RightNav() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className={open ? "NavOpen" : "NavClose"}>
                <div className= {open ? "closeIconContainer" : "menueIconContainer"}>
                    <img onClick={()=>{ open ? setOpen(false) : setOpen(true)}} src={open ? close : menue} alt={menue} className={open ? "iconClose" : "iconMenue"}/>
                </div>
                <p className={open ? "disaplearCurrentPage" : "currentPage"}>Home</p> 
                <ul className={open ? "allNavigatorItems" : "closedallItemNavigators"}>
                    <li className={open ? "navigatorsContainer" : null}><a className="items" href='/kian'>Home</a></li>
                    <li className={open ? "navigatorsContainer" : null}><a className="items" href='/kian/blogs'>Blogs</a></li>
                    <li className={open ? "navigatorsContainer" : null}><a className="items" href='/kian'>About Me</a></li>
                    <li className={open ? "navigatorsContainer" : null}><a className="items" href='/kian'>Contact Me</a></li>
                </ul>
            </nav>
        </>
        
    )
}

export default RightNav;