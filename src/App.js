import React, {Component} from 'react'
import './App.css'
import Monitor from './Monitor/Monitor'

const CONFIG = {
  "title": "Watchtower",
  "services": [
    {
      "name": "Service 1",
      "url": "https://example.com"
    },
    {
      "name": "Service 2",
      "url": "https://example.com"
    },
    {
      "name": "Service 3",
      "url": "https://example.com"
    },
    {
      "name": "Service 4",
      "url": "https://example.com"
    },
    {
      "name": "Service 5",
      "url": "https://example.com"
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Monitor config={CONFIG}/>
      </div>
    )
  }
}

export default App
