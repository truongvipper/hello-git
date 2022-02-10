import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DEPARTMENTS, STAFFS } from "../share/staff";
import DepartList from "./DepartmentComponet";
import Footer from "./FooterCompoent";
import Header from "./HeaderComponent";
import SalaryList from "./SalaryComponent";
import StaffDetail from "./StaffDetailComponent";
import Detail from "./StaffDetailComponent";
import StaffList from "./StaffListComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staff: STAFFS,
            depart: DEPARTMENTS
        }
    }
    render() {
        const staffWithId = ({match} ) => {
            return (
                <StaffDetail staff={this.state.staff.filter((staff)=>staff.id===parseInt(match.params.staffId,10))[0]} />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/nhanvien" component={() => <StaffList staff={this.state.staff} />}></Route>
                    <Route path="/nhanvien/:staffId" component={staffWithId}></Route>
                    <Route exact path="/phongban" component={() => <DepartList depart={this.state.depart} />} ></Route>
                    <Route exact path="/bangluong" component={() => <SalaryList staff={this.state.staff} />} ></Route>
                    <Redirect to="/nhanvien"></Redirect>
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default Main