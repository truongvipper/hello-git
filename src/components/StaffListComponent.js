import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from 'react-router-dom';
//Danh sách nhân viên
function RenderStaffItem({ staff }) {
    return (
        <Card className="card">
            <Link to={`/nhanvien/${staff.id}`}>
                <CardImg src="./assets/images/alberto.png" alt={staff.name}></CardImg>
                <CardBody>
                    <CardTitle className="text-center nameStaff">{staff.name}</CardTitle>
                </CardBody>
            </Link>
        </Card>
    );
}



const StaffList = (props) => {
    const stafflist = props.staff.map((staff) => {
        return (
            <div className="col-6 col-md-4 col-lg-2">
                <div key={staff.id} >
                    <RenderStaffItem staff={staff} />
                </div>
            </div>

        )
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/nhanvien'>Nhân viên</Link></BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Danh Sách nhân viên</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {stafflist}
            </div>
        </div>
    );
}




export default StaffList