import React, { Component } from 'react';
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

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
    if(props.staff !=null)
    return(
        <div className='container'>
            <div className='row'>
                <RenderStaffdepart staff={props.staff}></RenderStaffdepart>
            </div>
        </div>
    );
    else
    return(
        <div></div>
    )
}
export default Staffdepart