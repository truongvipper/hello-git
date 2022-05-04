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
import Staffdepart from "./StaffDepartComponent";

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

        // depart={this.props.depart.depart}
        const staff_with_depart=({match})=>{
            //Lấy id phòng ban,xong ánh xạ lên id nhân viên ,rồi filter ra nhân viên tương ứng
            const departGet =depart.find(dep => dep.id == staff.departmentId);
            return(
                <Staffdepart depart={this.props.depart.depart}  staff={this.props.staff.staff.filter((departGet)=>departGet===parseInt(match.params.departId))}></Staffdepart>
            )
        }
        


        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/nhanvien" component={() => <StaffList staffLoading={this.props.staff.isLoading} staff={this.props.staff} />}></Route>
                    <Route path="/nhanvien/:staffId" component={staffWithId}></Route>
                    <Route exact path="/phongban" component={() => <DepartList depart={this.props.depart.depart} />} ></Route>
                    <Route exact path="/staffDepart/:departId:" component={staff_with_depart}></Route>
                    <Route exact path="/bangluong" component={() => <SalaryList staff={this.props.staff.staff} />} ></Route>
                    <Redirect to="/nhanvien"></Redirect>
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main)) 