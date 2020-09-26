import React from "react";
import Nutrition from "./Nutrition";
import TimeLine from "./Timeline";
import About from "./About";
import fruitImg from "../asset/fruitsImg1.jpg";


function Main(){
    return(
        <React.Fragment>
           <div className ="jumbotron">
               <div className = "mainHeader">
                  <img src = {fruitImg} alt="Nature" style={{width: "100%"}}/>
                </div>
              </div>
            <Nutrition/>
            <TimeLine/>
            <About/>
        </React.Fragment>
    )
}


export default Main;