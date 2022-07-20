import React from 'react';
import '../components/styles/CSS/Home/home.css';
// import '../components/styles/CSS/Home/content.css';

import LeftInfo from '../components/leftInfo';
import Banner from '../components/banner';
import HomeContent from '../components/home/homeContent';
import RightNav from '../components/rightNav';

import bannerPic from '../images/banner.png';

function Home() {
    return (
        <>
            <LeftInfo />
                <div class="content" intial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 1}} >
                    <Banner banner={bannerPic}/>
                    <div className="homeContainer">
                        <HomeContent />
                    </div>
                </div>
            <RightNav />
        </>
    );
}

export default Home;