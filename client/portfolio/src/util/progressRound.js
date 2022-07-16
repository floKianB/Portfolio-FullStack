import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from '../components/styles/leftInfo.module.css';

function ProgressRound(props) {
    const percentage = props.value;

    return (
        <div className={styles.progressRound}>
            <CircularProgressbar 
                className={styles.progressRound} 
                value={percentage} text={`${percentage}%`} 
                styles={buildStyles({
                    // Text size
                    textSize: '20px',
                
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',
                
                    // Colors
                    pathColor: 'rgb(255,159,68)',
                    textColor: 'rgb(166, 166, 167)',
                    trailColor: 'transparent',
                    
                })}
            />
        </div>
    );
}

export default ProgressRound