
import Header from './HeaderComponent';
import Menu from './menuComponent';
import {DISHES} from '../share/dishes';
import { render } from 'react-dom';
import { Component } from 'react';
import Detail from "./DishDetailComponent";
import Footer from './FooterComponent';
class Main extends Component {
  constructor(props){
    super(props)
    {
     this.state={
      dishes:DISHES,
      selectedDish:null
     }
    }
  }
  onDishSelect(dishId){
    this.setState({selectedDish:dishId})
}
  render()
  {
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}></Menu>
        <Detail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}></Detail>
        <Footer/>
      </div>
    );
  }
}

export default Main;
