
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
import { addComment,fetchDishes,fetchComments,fetchPromos,fetchLeaders} from '../redux/ActionCreaters';
import {actions} from 'react-redux-form'
const mapStateToProps=state=>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}

const mapDispatchToProps=(dispatch)=>({
  addComment:(dishId,rating,author,comment)=>dispatch(addComment(dishId,rating,author,comment)),
  fetchDishes:()=>{dispatch(fetchDishes())},
  resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))},
  fetchComments:()=>{dispatch(fetchComments())},
  fetchPromos:()=>{dispatch(fetchPromos())},
  fetchLeaders: () => dispatch(fetchLeaders()),
});

class Main extends Component {
  constructor(props){
    super(props);
  }
  // onDishSelect(dishId){
  //   this.setState({selectedDish:dishId})
  //  }
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  render()
  {
    const HomePage=()=>{
      return(
        <Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading} 
        dishesErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promosLoading={this.props.promotions.isLoading} 
        promosErrMess={this.props.promotions.errMess}
        leader={this.props.leaders.leaders.filter((leader)=>leader.featured)[0]}
        leaderLoading={this.props.leaders.isLoading}
        leaderErrMess={this.props.leaders.errMess}
        />
      )
    }
    const DishWithId=({match})=>{
      return(
        <Detail dish={this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading} 
        errMess={this.props.dishes.errMess} 
        comments={this.props.comments.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
        commentsErrMess={this.props.comments.errMess} 
        addComment={this.props.addComment}>
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
            <Route exact path="/contact" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}></Route>
            <Redirect to="/home" />
          </Switch>
          {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}></Menu>
          <Detail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}></Detail> */}
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
