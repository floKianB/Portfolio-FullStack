import React from 'react'
import styles from './styles/leftInfo.module.css';


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
        <div className={styles.moreInfoButton}>
            <img className={styles.moreIcon} src={moreIcon} alt={moreIcon} />
        </div>
        <aside>
            <div className={styles.introduction}>
                <img src={face} alt="Kian" className={styles.face}/>
                <p className={styles.introText}>MERN Stack Developer <br/> Flutter Developer</p>
            </div>
            <div className={styles.scrolInfor}>
                <div className={styles.personalInfo}>
                    <table>
                        <tr>
                            <td>Recidance:</td>
                            <td className={styles.textInfoR}>Canada</td>
                        </tr>
                        <tr>
                            <td>City:</td>
                            <td className={styles.textInfoR}>Toronto</td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td className={styles.textInfoR}>19</td>
                        </tr>
                    </table>
                </div>

                <hr />

                <div className={styles.progressRoundContainer}>
                    <div className={styles.langColumn}>
                        <ProgressRound value = {70}/>
                        <p>Kurdi</p>
                    </div>
                    <div className={styles.langColumn}>
                        <ProgressRound value = {90}/>
                        <p>Farsi</p>
                    </div>
                    <div className={styles.langColumn}>
                        <ProgressRound value = {85}/>
                        <p>English</p>
                    </div>
                </div>

                <hr />

                <div className={styles.progressLineContainer}>
                    <ProgressLine value = {95} label = "HTML5" />
                    <ProgressLine value = {80} label = "CSS3" />
                    <ProgressLine value = {90} label = "JS" />
                    <ProgressLine value = {60} label = "Flutter" />
                    <ProgressLine value = {85} label = "Dart" />
                    <ProgressLine value = {90} label = "Git" />
                    <ProgressLine value = {85} label = "React js" />
                </div>
            </div>
            <div className={styles.socialMediaBar}>
                <img src={instagram} alt={instagram} className={styles.iconMedia}/>
                <img src={youtube} alt={youtube} className={styles.iconMedia}/>
                <img src={github} alt={github} className={styles.iconMedia}/>
                <img src={linkedin} alt={linkedin} className={styles.iconMedia}/>
            </div>
        </aside>
        
        </>
        
    );
}

export default LeftInfo;