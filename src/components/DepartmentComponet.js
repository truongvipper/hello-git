import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody,Breadcrumb,BreadcrumbItem } from "reactstrap"
import { Link } from 'react-router-dom';
//function hiện ra danh sách phòng ban  và số lượng tương ứng
function RenderDepart({depart}){
    return(
        <Card>
            <CardText>{depart.name}</CardText>
            <CardText>Số lượng nhân viên :{depart.numberOfStaff}</CardText>
        </Card>
    )
}

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