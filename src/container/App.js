import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from '../components/CardList'
import Searchbox from '../components/Searchbox'
import ErrorBoundry from '../components/ErrorBoundry';
import image from "../waiting-gifs.gif"

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => { setRobots(data) })
  },[])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  return (!robots.length) ? 
  <div className='loading-div'> <img src={image} className='loading-img' /> </div>
  : 
 (
    <div className="tc container" >
      <h1 className='f1'> RoboProject</h1>
      <Searchbox searchChange={onSearchChange} />
      <ErrorBoundry>
        <CardList className='mt3' robots={filteredRobots} />
      </ErrorBoundry>
    </div>
  )
}

export default App;
