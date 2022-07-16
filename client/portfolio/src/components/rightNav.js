import React, {useState,} from 'react';
import {NavLink, Navigate} from 'react-router-dom';
import styles from './styles/rightNav.module.css';
import menue from '../images/menue.png';
import close from '../images/close.png';
function RightNav() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className={styles.iconMoreNavContainer}>   
                <img src={menue} alt={menue} className={styles.iconMoreNav}/>
            </div>

            <nav className={open ? styles.NavOpen : styles.NavClose}>
                <div className={open ? styles.closeIconContainer : styles.menueIconContainer}>
                    <img onClick={()=>{ open ? setOpen(false) : setOpen(true)}} src={open ? close : menue} alt={menue} className={open ? styles.iconClose : styles.iconMenue}/>
                </div>
                <p className={open ? styles.disaplearCurrentPage : styles.NavigateItem}>Home</p> 
                <ul className={open ? styles.allNavigatorItems : styles.closedallItemNavigators}>
                    <li><a  className={styles.items} href='/kian'>Home</a></li>
                    <li><a  className={styles.items} href='/kian/blogs'>Blogs</a></li>
                    <li><a  className={styles.items} href='#'>About Me</a></li>
                    <li><a  className={styles.items} href='#'>Contact Me</a></li>
                </ul>
            </nav>
        </>
        
    )
}

export default RightNav;