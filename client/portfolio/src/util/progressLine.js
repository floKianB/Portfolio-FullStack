import React from 'react';
import styles from '../components/styles/leftInfo.module.css';


function ProgressLine(props) {
    return (
        <>
        <div className={styles.progressLineText}>
            <label>{props.label}</label>
            <p>{props.value}%</p>
        </div>
        <progress value={props.value} max="100" className={styles.progressLine}></progress>
        </>
        
    )
}

export default ProgressLine;