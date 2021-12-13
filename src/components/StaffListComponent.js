import { Component } from "react";
import { Card, CardText ,CardBody} from "reactstrap";
import dateFormat from 'dateformat';
class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStaff:null,
        }
    };
    onStaffSelect(staff){
        this.setState({selectedStaff:staff})
    }
    renderStaff(staff){
        
        if(staff!=null){
            return(
                <Card className="w-50">
                    <CardBody>
                        <CardText><b>Họ và tên :</b> {staff.name}</CardText>
                        <CardText><h5>Ngày bắt đầu làm công ty:</h5>{dateFormat(staff.startDate,"dd/mm/yy")}</CardText>
                        <CardText><h5>Ngày sinh:</h5> {dateFormat(staff.doB,"dd/mm/yy")}</CardText>
                        <CardText><h5>Phòng ban:</h5>{staff.department.name}</CardText>
                        <CardText><h5>Số ngày đã làm thêm:</h5>{staff.overTime}</CardText>
                        <CardText><h5>Số ngày nghỉ còn lạii:</h5>{staff.annualLeave}</CardText>
                    </CardBody>
                </Card>
            )
        }
    }
    render() {
        
        const stafflist = this.props.staff.map((staff,depart) => {
            return (
                <div key={staff.id} key={depart.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onStaffSelect(staff)}>
                        <CardText>{staff.name}</CardText>
                    </Card>
                </div>

            )
        })
        return (
            <div className="container">
                <div className="row">
                    {stafflist}
                </div>
                <div>
                        <p>Nhấn vào đây để hiển thị menu</p>
                        {this.renderStaff(this.state.selectedStaff)}
                </div>

            </div>
        );
    }
}

export default StaffList