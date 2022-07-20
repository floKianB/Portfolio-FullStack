import React from 'react'
import './styles/CSS/Constants/leftInfo/leftInfo.css';


import ProgressRound from '../util/progressRound';
import ProgressLine from '../util/progressLine';

import face from '../images/face.jpg';

import instagram from '../images/instagramColor.png';
import youtube from '../images/youtubeColor.png';
import github from '../images/githubColor.png';
import linkedin from '../images/linkedinColor.png';
import moreIcon from '../images/moreIcon.png';

function LeftInfo() {
    return (
        <>
        {/* <div className={styles.moreInfoButton}>
            <img className={styles.moreIcon} src={moreIcon} alt={moreIcon} />
        </div> */}
        <aside>
            <div className="introduction">
                <img className="face" src={face} alt="Kian"/>
                <p className="introText">MERN Stack Developer <br/> Flutter Developer</p>
            </div>
            <div className="scrolInfo">
                <div className="personalInfo">
                    <table>
                        <tr>
                            <td>Recidance:</td>
                            <td className="textInfoR">Canada</td>
                        </tr>
                        <tr>
                            <td>City:</td>
                            <td className="textInfoR">Toronto</td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td className="textInfoR">19</td>
                        </tr>
                    </table>
                </div>

                <hr />

                <div className="progressRoundContainer">
                    <div className="langColumn">
                        <ProgressRound value = {70}/>
                        <p>Kurdi</p>
                    </div>
                    <div className="langColumn">
                        <ProgressRound value = {90}/>
                        <p>Farsi</p>
                    </div>
                    <div className="langColumn">
                        <ProgressRound value = {85}/>
                        <p>English</p>
                    </div>
                </div>

                <hr />

                <div className="progressLineContainer">
                    <ProgressLine value = {95} label = "HTML5" />
                    <ProgressLine value = {80} label = "CSS3" />
                    <ProgressLine value = {90} label = "JS" />
                    <ProgressLine value = {60} label = "Flutter" />
                    <ProgressLine value = {85} label = "Dart" />
                    <ProgressLine value = {90} label = "Git" />
                    <ProgressLine value = {85} label = "React js" />
                </div>
            </div>
            <div className="socialMediaBar">
                <img src={instagram} alt={instagram} className="iconMedia"/>
                <img src={youtube} alt={youtube} className="iconMedia"/>
                <img src={github} alt={github} className="iconMedia"/>
                <img src={linkedin} alt={linkedin} className="iconMedia"/>
            </div>
        </aside>
        
        </>
        
    );
}

export default LeftInfo;