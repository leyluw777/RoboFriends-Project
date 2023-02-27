import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import Searchbox from '../components/Searchbox'
import ErrorBoundry from '../components/ErrorBoundry';
import image from "../waiting-gifs.gif"

import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => { this.setState({ robots: data }) });
  }

  render() {

    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (!robots.length) ?
      <div className='loading-div'> <img alt='Oups' src={image} className='loading-img' /> </div>
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
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
