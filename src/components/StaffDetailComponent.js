import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../share/baseUrl';


//Chi tiết nhân viên
function RenderDetail({staff}){
    return(
        <div className='container'>
            <div className='row mr-5'>
                <div className='col-12 col-md-4 col-lg-3'>
                <CardImg src={staff.image} alt={staff.name}></CardImg>
                </div>
                <div className='col-12 col-md-8 col-lg-9'>
                    <h3>Họ và tên:{staff.name}</h3>
                    <p>Ngày sinh:{dateFormat(staff.dob,"dd/mm/yy")}</p>
                    <p>Ngày vào công ty:{dateFormat(staff.startDate,"dd/mm/yy")}</p>
                    <p>Phòng ban:{staff.department.name}</p>
                    <p>Số ngày nghỉ còn lại:{staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm:{staff.overTime}</p>
                </div>
            </div>
        </div>
    )
}

const StaffDetail=(props)=>{
    if(props.staffLoading){
        return(
            <div className='container'>
                <div className='row'>
                    <Loading/>
                </div>
            </div>
        )
    }
    else if(props.staffErrMess){
        return(
            <div className='container'>
                <div className='row'>
                    <h4>{props.staffErrMess}</h4>
                </div>
            </div>
        )
    }

    if(props.staff !=null)
    return(
        <div className='container'>
            <div className='row ml-1'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/nhanvien'>Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
            </div>
            <div className='row'>
                <RenderDetail staff={props.staff} />
            </div>
        </div>
    );
    else
    return(
        <div></div>
    )
}
export default StaffDetail