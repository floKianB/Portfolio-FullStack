import React from 'react';
import '../components/styles/CSS/Constants/leftInfo/leftInfo.css';


function ProgressLine(props) {
    return (
        <>
        <div className="progressLineText">
            <label className="label" >{props.label}</label>
            <p className="valuepercentage" >{props.value}%</p>
        </div>
        <progress value={props.value} max="100" className="progressLine"></progress>
        </>
        
    )
}

export default ProgressLine;