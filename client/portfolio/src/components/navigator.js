import React from 'react'
import styles from './styles/navigator.module.css';
import menue from '../images/menue.png';

function Navigator() {
    return (
        <nav>
            <div className={styles.menueIconContainer}>
                <img src={menue} alt={menue} className={styles.iconMenue}/>
            </div>
            <p className={styles.NavigateItem}>Home</p>
        </nav>
    )
}

export default Navigator