import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/menuComponent';
import './App.css';
import {DISHES} from './share/dishes';
import { render } from 'react-dom';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    {
     this.state={
      dishes:DISHES
     }
    }
  }
  render()
  {
    return (
      <div>
        <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Truong COCO</NavbarBrand>
            </div>
        </Navbar>
        <Menu dishes={this.state.dishes}></Menu>
      </div>
    );
  }
}

export default App;
