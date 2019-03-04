import React, {useState, useEffect} from 'react'
import './ServiceTile.css'

const STATUS = {
  unknown: "UNKNOWN",
  healthy: "HEALTHY",
  unhealthy: "UNHEALTHY"
}

const ServiceTile = ({details, pollingInterval}) => {
  const [status, setStatus] = useState(STATUS.unknown)

  function refreshServiceStatus() {
    console.log("Refreshing status for service:" + details.name)

    const onSuccess = (result) => {
      console.log("Setting status as healthy for service: " + details.name)
      setStatus(STATUS.healthy)
    }
    const onFailure = (error) => {
      console.log("Setting status as unhealthy for service: " + details.name)
      console.log("error: " + error)
      setStatus(STATUS.unhealthy)
    }
    fetch(details.url, {method: details.method, mode: "no-cors", credentials: "omit"})
      .then(onSuccess, onFailure)
      .catch(onFailure)
  }

  useEffect(() => {
    refreshServiceStatus()

    const interval = window.setInterval(() => {
      refreshServiceStatus()
    }, pollingInterval * 60 * 1000)

    return () => window.clearInterval(interval)
  }, [details])

  return (
    <div className={
      "service-tile"
      + (status === STATUS.healthy ? " service-tile--healthy" : "")
      + (status === STATUS.unhealthy ? " service-tile--unhealthy" : "")
    }>
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