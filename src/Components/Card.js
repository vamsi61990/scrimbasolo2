import React from "react";
import gps from "../Images/gps.png"

const Card=(props) =>{
  return(
    <div className="card">
      <img src={props.id} className="card--img"/>
      <div className="details">
        <div className="gps--details">
          <img src={gps} className="card--gps"/>
          <p className="gps--location">{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
          <p className="card--date">{props.startDate}-{props.endDate}</p>
          <p className="card--desc">{props.description}</p>
      </div>
    </div>
    
  )
}
export default Card