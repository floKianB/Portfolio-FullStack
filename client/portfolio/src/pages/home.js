import React from 'react';
import styles from '../components/styles/home/home.module.css';

import LeftInfo from '../components/leftInfo';
import Banner from '../components/banner';
import HomeContent from '../components/home/homeContent';
import RightNav from '../components/rightNav';


import bannerPic from '../images/banner.png';

function Home() {
    return (
        <>
            <LeftInfo />
            <div class={styles.content}>
                <Banner banner={bannerPic}/>
                <div className={styles.homeContainer}>
                    <HomeContent />
                </div>
            </div>
            <RightNav />
        </>

    );
}

export default Home;