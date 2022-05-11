import React, { useState, useEffect } from 'react';
import {  CardImg,Breadcrumb, BreadcrumbItem,} from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import { Loading } from './LoadingComponent';
import { staffLoading } from '../redux/ActionCreator';

//Chi tiết nhân viên
function RenderDetail({staff,staffLoading,staffErrMess,depart}) {
    const departGet =depart.find(dep => dep.id == staff.departmentId);
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>setLoading(false), 3000);
        //Thực tế: đây là chỗ gọi API get staff by id
        //then.(setLoading(false))
    }, []);

    if(loading){ //cái này đang mãi mãi true và không có cái gì set nó lại thành false
        return(
            <div className='container'>
                <div className='row'>
                    <Loading/>
                </div>
            </div>
        )
    }
    else if(staffErrMess){
        return(
            <div className='container'>
                <div className='row'>
                    <h4>{staffErrMess}</h4>
                </div>
            </div>
        )
    }
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
                    <p>Phòng ban:{departGet.name}</p>
                    <p>Số ngày nghỉ còn lại:{staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm:{staff.overTime}</p>
                </div>
            </div>
        </div>
    )
}

const StaffDetail=(props)=>{
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
                <RenderDetail staff={props.staff} depart={props.depart} staffLoading={props.staffLoading}/>
            </div>
        </div>
    );
    else
    return(
        <div></div>
    )
}
export default StaffDetail
