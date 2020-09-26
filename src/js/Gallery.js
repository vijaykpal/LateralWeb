import React from "react";

import fruits1 from "../asset/fruits1.jpg"
import fruits2 from "../asset/fruits2.jpg"
import fruits3 from "../asset/fruits3.jpg"

const Gallery = ()=>{
    return(
        <div className="row sliderImages">
            <div className="col-md-4">
                <div className="rounded">
                    <a>
                        <img src= {fruits1} alt="Lights" style={{width: "100%"}}/>
                    </a>
                </div>
            </div>
            <div className="col-md-4">
                <div className="rounded">
                    <a>
                        <img src= {fruits2} alt="Nature"  style={{width: "100%"}}/>
                    </a>
                </div>
            </div>
            <div className="col-md-4">
                <div className="rounded">
                    <a>
                        <img src= {fruits3} alt="Fjords"  style={{width: "100%"}}/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Gallery;