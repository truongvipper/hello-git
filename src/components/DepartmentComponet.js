import React, { Component } from "react";
import { Card, CardText} from "reactstrap"
import { Link } from 'react-router-dom';
//function hiện ra danh sách phòng ban  và số lượng tương ứng
function RenderDepart({depart}){
    return(
        <Card>
            <Link to={`/staffDepart/${depart.id}`}>
            <CardText>{depart.name}</CardText>
            <CardText>Số lượng nhân viên :{depart.numberOfStaff}</CardText>
            </Link>
        </Card>
    )
}
//Map như danh sách nhân viên đúng ko ạ,nếu như thế thì để em tự làm

const DepartList = (props) => {
    const departList = props.depart.map((depart) => {
        return (
            <div key={depart.id} className="col-12 col-md-6 mt-1">
                <RenderDepart depart={depart} />
            </div>
        )
    });
    return (
        <div className="container">
            <div className="row">
                {departList}
            </div>
        </div>
    );
}
export default DepartList