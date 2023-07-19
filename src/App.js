import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField : '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((user) =>{
          this.setState(
              () => {
                return { monsters : user};
              },
              () => {
                console.log(this.state);
              }
          )
        })
  };

  OnSearchChange = (event) => {
    let searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    })
  }

  render(){
    const {monsters , searchField} = this.state;
    const {OnSearchChange} = this;
    const filterdeMonsters = monsters.filter((monster) => {
      // eslint-disable-next-line no-undef
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
  return (
      <div className="App">
        <input className= 'search-box' type= 'search' placeholder= 'search monsters' onChange={OnSearchChange
        }/>
        {
          filterdeMonsters.map((monster) => {
            return (
                <div key={monster.id}>
                <h1>{monster.name}</h1>
                </div>
            );
          })

        }
      </div>
  );}
}

export default App;
