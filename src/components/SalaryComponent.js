import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from 'react-router-dom';

function RenderSalary({ staff }) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    const salary = (staff.salaryScale * basicSalary) + (staff.overTime * overTimeSalary)
    return (
        <Card>
            <CardBody>
                <CardTitle>{staff.name}</CardTitle>
                <CardText>Mã nhân viên:{staff.id}</CardText>
                <CardText>Hệ số lương:{staff.salaryScale}</CardText>
                <CardText>Số giờ làm thêm:{staff.overTime}</CardText>
                <CardText>Lương:{salary}</CardText>
            </CardBody>
        </Card>
    );
}

const SalaryList = (props) => {
    const salarylist = props.staff.map((staff) => {
        return (
            <div key={staff.id} className="col-12 col-md-6 mt-1">
                <RenderSalary staff={staff} />
            </div>
        )
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/nhanvien'>Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    {salarylist}
                </div>
            </div>
        </div>
    )
}

export default SalaryList