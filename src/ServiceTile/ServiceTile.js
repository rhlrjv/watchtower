import React from 'react';
import './ServiceTile.css'

const ServiceTile = ({details}) => {
  return (
    <div className="service-tile">
      <div className="service__name">
        {details.name}
      </div>
      <div className="service__url">
        {details.url}
      </div>
    </div>
  )
}

export default ServiceTile