import React from 'react'

import bannerPhoto from '../images/banner.png';
import styles from './styles/banner.module.css';

function Banner() {
    return (
        <div className={styles.BannerContainer}>
            <img src={bannerPhoto} alt={bannerPhoto} className={styles.banner} />
        </div>
    )
}

export default Banner