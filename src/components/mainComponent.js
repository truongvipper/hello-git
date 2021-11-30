
import Header from './HeaderComponent';
import Menu from './menuComponent';
import {DISHES} from '../share/dishes';
import {COMMENTS} from '../share/comment';
import {LEADERS} from '../share/leader';
import {PROMOTIONS} from '../share/promotion'
import { render } from 'react-dom';
import { Component } from 'react';
import Home from './HomeComponent';
import { Switch,Route,Redirect } from 'react-router';
import Detail from "./DishDetailComponent";
import Contact from './ContactComponent';
import Footer from './FooterComponent';
class Main extends Component {
  constructor(props){
    super(props)
    {
     this.state={
      dishes:DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS,
      selectedDish:null
     }
    }
  }
  // onDishSelect(dishId){
  //   this.setState({selectedDish:dishId})
  //  }
  
  render()
  {
    const HomePage=()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]} 
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
        />
      )
    }
    const DishWithId=({match})=>{
      return(
        <Detail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} 
        comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}>
        </Detail>
      )
    }
    return (
      <div>
        <Header/>
          <Switch>
            <Route path="/home" component={HomePage}></Route>
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}></Route>
            <Route path="/menu/:dishId" component={DishWithId}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Redirect to="/home" />
          </Switch>
          {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}></Menu>
          <Detail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}></Detail> */}
        <Footer/>
      </div>
    );
  }
}

export default Main;
