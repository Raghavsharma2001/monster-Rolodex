import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
    // console.log('constructor')
  }
  
  componentDidMount() {
    // console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(
      () => {
        return {monsters: users}
      },
      () => {
        //only happens when the setstate is update
        // console.log(this.state)
      }
      ))
  }
  // more performace as the extra fuctions are not rendered
  onSearchChange  = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    });
  }

  render() {
    // console.log('render')
    //destructuring makes it  more readbale and the varaible are intialised 
    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    })

    return (
      <div className="App">
      <h1 className='app-title'> Monsters</h1>
      <SearchBox  
      onChangeHandler={onSearchChange} 
      placeholders="search monsters" 
      className= "search-box" 
      / >
      < CardList monsters={filteredMonsters} /> 
      </div>
    );
  }
}

export default App;
