import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../components/styles/CSS/Constants/leftInfo/leftInfo.css';


function ProgressRound(props) {
    const percentage = props.value;

    return (
        <div className="progressRound">
            <CircularProgressbar 
                className="progressRound"
                value={percentage} text={`${percentage}%`} 
                styles={buildStyles({
                    textSize: '20px',
                    pathTransitionDuration: 0.5,
                    pathColor: 'rgb(255,159,68)',
                    textColor: 'rgb(166, 166, 167)',
                    trailColor: 'transparent',
                    
                })}
            />
        </div>
    );
}

export default ProgressRound