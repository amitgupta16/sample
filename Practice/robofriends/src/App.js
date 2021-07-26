import React, { Component } from 'react';
import ReachDOM from 'react-dom';
import CardList from './CardList.js';
import {robots} from './robots.js';
import Scroll from './Scroll';
import SearchBox from './SearchBox.js';
import './index.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField:'',
        }
    }

    componentDidMount(){
        fetch(`http://jsonplaceholder.typicode.com/users`)
        .then(Response => Response.json())
        .then(users =>this.setState({robots: users}));        
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });    
        if (!this.state.robots.length){
            return <h1>Loading...</h1>
        } else{
            return(
            <div className='App'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            );
        }        
    }
}

export default App;