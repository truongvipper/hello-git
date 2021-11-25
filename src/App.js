
import Main from './components/mainComponent';
import './App.css';
import { render } from 'react-dom';
import { Component } from 'react';
import {Detail} from '../src/components/DishDetailComponent'
class App extends Component {
  render()
  {
    return (
      <div>
        <Main></Main>
      </div>
    );
  }
}

export default App;
