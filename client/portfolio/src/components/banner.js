import React from 'react'

import styles from './styles/banner.module.css';
import smallBackground from '../images/smallBackground.png';

function Banner(props) {
    return (
        <>
        <div className={styles.BannerContainer}>
            <img src={props.banner} alt={props.banner} className={styles.banner} />
        </div>
        <div className={styles.BannerContainerSmallScreen}>
            <img src={smallBackground} alt={smallBackground} className={styles.bannerSmall} />
        </div>
        </>
    )
}

export default Banner