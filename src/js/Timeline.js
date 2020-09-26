import React from "react";
import Gallery from "./Gallery";
import Services from "./Services";
import farmerImage from "../asset/farmerImg1.jpg";
import googleMap from "../asset/googleMap.png";


const HarvestDetail = ()=>{
    return(
        <div className = "tableWrap">
            <table>
                <tbody>
                <tr>
                    <td>
                        <div className = "head">Product Name</div>
                    </td>
                    <td>
                        Papaya
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className = "head"> Product Variety</div>
                    </td>
                    <td>
                        Pusa Majesty
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};


const FarmerDetail = ()=>{
    return(
        <div className = "farmerDetailWrap">
            <div>
                <img src= {farmerImage} className="img-circle" alt="Farmer"/>
            </div>
            <div className = "detail">
                <p>Ajay Kumar</p>
                <p>Ghaziabad, UttarPradesh</p>
            </div>
        </div>
    )
};


const LocationDetail = ()=>{
    return(
        <div className = "tableWrap">
            <table>
                <tbody>
                <tr>
                    <td>
                        <div className = "head">Center Name</div>
                    </td>
                    <td>
                        Lal Kuan
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className = "head"> FSSAI Licence</div>
                    </td>
                    <td>
                        8080808080808080
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

const FirstTimeLine = ()=>{
  return(
      <div className="timelineContainer">
          <div className="content">
              <h3>Harvest Stage</h3>
               <HarvestDetail/>
              <h5>Farmer details</h5>
              <FarmerDetail/>
              <div className = "googleMap">
                  <img src= {googleMap} className="rounded" alt="Farmer"/>
              </div>
          </div>
      </div>
  )
};

const SecondTimeLine = ()=>{
    return(
        <div className="timelineContainer">
            <div className="content">
                <h3>At collection centre</h3>
                <LocationDetail/>
                <h5>Location</h5>
                <div className = "googleMap">
                    <img src={googleMap} className="rounded" alt="Farmer"/>
                </div>
                <Gallery/>
                <Services/>
            </div>
        </div>
    )
};

const ThirdTimeLine = () =>{
    return(
        <div className="timelineContainer">
            <div className="content">
                <h3>Delivering with love and care for you to relish</h3>
            </div>
        </div>
    )
};

function TimeLine(){

    return(
        <div className="container">
            <div className="timeline">
                <FirstTimeLine/>
                <SecondTimeLine/>
                <ThirdTimeLine/>
            </div>
        </div>
    )
};

export default TimeLine;