import React, { Component } from 'react';
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';
//Dạ đây anh 

function RenderStaffdepart({ staff }) {
    return (
      <Card className="card">
          <CardImg src={staff.image} alt={staff.name}></CardImg>
          <CardBody>
            <CardTitle className="text-center nameStaff">{staff.name}</CardTitle>
          </CardBody>
      </Card>
    );
}

const Staffdepart=(props)=>{
    //if(props.staff !=null)
    
    const deprtStaff=props.staff.map((staff)=>{
        return(
            <div key={staff.id} className="col-6 col-md-4 col-lg-2">
                <RenderStaffdepart  staff={staff}></RenderStaffdepart>
            </div>
        )
    })
    return(
        <div className='container'>
            <div className='row'>
                {deprtStaff}
            </div>
        </div>
    );
    //else
    /*return(
        <div></div>
    )*/
}
export default Staffdepart