
import Header from './HeaderComponent';
import Menu from './menuComponent';

import { render } from 'react-dom';
import { Component } from 'react';
import Home from './HomeComponent';
import { Switch,Route,Redirect,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Detail from "./DishDetailComponent";
import Contact from './ContactComponent';
import Footer from './FooterComponent';

const mapStateToProps=state=>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}

class Main extends Component {
  constructor(props){
    super(props);
  }
  // onDishSelect(dishId){
  //   this.setState({selectedDish:dishId})
  //  }
  
  render()
  {
    const HomePage=()=>{
      return(
        <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]} 
        promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
        />
      )
    }
    const DishWithId=({match})=>{
      return(
        <Detail dish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} 
        comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}>
        </Detail>
      )
    }
    return (
      <div>
        <Header/>
          <Switch>
            <Route path="/home" component={HomePage}></Route>
            <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>}></Route>
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

export default withRouter(connect(mapStateToProps)(Main));
