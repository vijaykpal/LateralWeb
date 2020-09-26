import React from "react";
import tractorIcon from "../asset/tractorIcon.png";
import traceIcon from "../asset/traceIcon.jpg";
import glob from "../asset/glob.png";

const Services = ()=>{
    return(
        <div className = "services">
            <h5>Secret behind your fruit's goodness</h5>
            <div className = "serviceWrap">
                <div className = "qualityImageWrap">
                    <img src= {tractorIcon} alt="Farmer"/>
                </div>
                <div className = "qualityName">Direct From Farm</div>
            </div>
            <div className = "serviceWrap">
                <div className = "qualityImageWrap">
                    <img src= {traceIcon} alt="Farmer"/>
                </div>
                <div className = "qualityName">Fully Tracable</div>
            </div>
            <div className = "serviceWrap">
                <div className = "qualityImageWrap">
                    <img src= {glob} alt="Farmer"/>
                </div>
                <div className = "qualityName">Export Quality</div>
            </div>
        </div>
    )
};

export default Services;