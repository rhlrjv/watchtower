import React, {useState, useEffect} from 'react'
import './App.css'
import Monitor from './Monitor/Monitor'

const DEFAULT_CONFIG = {
  "title": "Default Config",
  "services": []
}

const App = ({configPath}) => {
  const [config, setConfig] = useState(DEFAULT_CONFIG)

  useEffect(() => {
    fetch(configPath)
      .then(res => res.json())
      .then(response => setConfig(response))
  }, configPath)

  return (
    <div className="App">
      <Monitor config={config}/>
    </div>
  )
}

export default App
