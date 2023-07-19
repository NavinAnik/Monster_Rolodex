import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '125xax545',
        },
        {
          name:'Frank',
          id: '125xax54e',
        },
        {
          name: 'Jacky',
          id: '125xax549',
        },
      ],
    };
  }
  render()
  {return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
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
