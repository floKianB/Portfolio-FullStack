import React from 'react'

import './styles/CSS/Constants/banner/banner.css';
import smallBackground from '../images/smallBackground.png';

function Banner(props) {
    return (
        <>
        <div className="BannerContainer">
            <img src={props.banner} alt={props.banner} className="banner" />
        </div>
        <div className="BannerContainerSmallScreen">
            <img src={smallBackground} alt={smallBackground} className="bannerSmall"/>
        </div>
        </>
    )
}

export default Banner;