import { Component } from "react";
import { Redirect, Route, Switch,withRouter } from "react-router-dom";

import DepartList from "./DepartmentComponet";
import Footer from "./FooterCompoent";
import Header from "./HeaderComponent";
import SalaryList from "./SalaryComponent";
import StaffDetail from "./StaffDetailComponent";
import Detail from "./StaffDetailComponent";
import StaffList from "./StaffListComponent";
import {fetchStaff,fetchDepart} from '../redux/ActionCreator'
import {connect} from 'react-redux';

const mapStateToProps=state=>{
    return{
        staff:state.staff,
        depart:state.depart
    }
}

const mapDispatchToProps=(dispatch)=>({
    fetchStaff:()=>{dispatch(fetchStaff())},
    fetchDepart:()=>{dispatch(fetchDepart())}
})


class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        debugger
        this.props.fetchStaff()
        this.props.fetchDepart()
    }    

    render() {
        const staffWithId = ({match} ) => {
            return (
                <StaffDetail staff={this.props.staff.staff.filter((staff)=>staff.id===parseInt(match.params.staffId,10))[0]} 
                staffLoading={this.props.staff.isLoading}
                staffErrMess={this.props.staff.errMess}
                depart={this.props.depart.depart}
                />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/nhanvien" component={() => <StaffList staffLoading={this.props.staff.isLoading} staff={this.props.staff} />}></Route>
                    <Route path="/nhanvien/:staffId" component={staffWithId}></Route>
                    <Route exact path="/phongban" component={() => <DepartList depart={this.props.depart} />} ></Route>
                    <Route exact path="/bangluong" component={() => <SalaryList staff={this.props.staff} />} ></Route>
                    <Redirect to="/nhanvien"></Redirect>
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main)) 