import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
  console.log(props);
  return (
    <div>
    <div className="row">
      <div className="column1">
      <img className="photo" src={props.item.imageUrl} alt="location"/>
    </div>
  
    <div className="column2">
      <div className="cardCountry">
        <FontAwesomeIcon className="icon" icon={faLocationPin}/>
        <h2 className="country">{props.item.location}</h2>
        <a className="googleLink" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
      </div>
      <div className="cardLocation"><h1>{props.item.title}</h1></div>
      <div className="cardDate">
        <h4>{props.item.startDate} - {props.item.endDate}</h4>
      </div>
      <p className="cardDescription">{props.item.description}</p>
      
    </div>
  </div>
  <hr></hr>
  </div>
  )
}