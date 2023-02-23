import React, {Component} from 'react';
import './App.css';
import CardList from '../components/CardList'
import Searchbox from '../components/Searchbox'
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor(){
    super()
    this.state={
      robots: [],
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>
      this.setState({robots: data}))
  }

    onSearchChange = (event) => {
        this.setState(
          {
            searchfield: event.target.value
          });
    }

  render(){
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter( robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    // if (!robots.length) {
    //   return <h1> Loading...</h1>
    // }
    return (
      <div className="tc container" >
      <h1 className='f1'> RoboProject</h1>
     
      <Searchbox searchChange={this.onSearchChange} />
      <ErrorBoundry> 
      <CardList className='mt3' robots={filteredRobots}/>
      </ErrorBoundry>
      </div>
    );
  }
 
}

export default App;
