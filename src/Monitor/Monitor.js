import React from 'react'
import './Monitor.css'
import ServiceTile from "../ServiceTile/ServiceTile"

const Monitor = ({config}) => {
  return (
    <div className="monitor">
      <div className="monitor__header">
        {config.title}
      </div>
      <div className="monitor__details">
      </div>
      <div className="monitor__services">
        {config.services.map((service, index) => (
          <ServiceTile key={index} details={service} pollingInterval={config.pollingIntervalInMins}/>)
        )}
      </div>
    </div>
  )
}

export default Monitor