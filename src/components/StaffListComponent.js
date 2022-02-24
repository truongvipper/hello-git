import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Button, Label, Input, FormGroup} from "reactstrap"
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




class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            doB: '',
            salaryScale: '',
            startDate: '',
            department: '',
            annualLeave: '',
            overTime: '',
            salary: '',
            image: '/assets/images/alberto.png',
            isModalOpen:false
        };
        this.toggleModal=this.toggleModal.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }
    render() {
        const newStaff = {
            name: '',
            doB: '',
            salaryScale: '',
            startDate: '',
            department: '',
            annualLeave: '',
            overTime: '',
            salary: '',
            image: '/assets/images/alberto.png'
        }
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
                    <div className="col-2">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/nhanvien'>Nhân viên</Link></BreadcrumbItem>
                        </Breadcrumb>
                        <Button onClick={this.toggleModal}>
                            <span><i class="fa fa-plus-square" aria-hidden="true"></i></span>
                        </Button>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader className="text-center" toggle={this.toggleModal}>Thêm sinh viên</ModalHeader>
                        </Modal>
                        <ModalBody>
                            <Form onSubmit={this.handelAdd}>
                                <FormGroup>
                                    <Label htmlFor="name">Tên</Label>
                                    <Input type="text" id="name" name="name"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="birt">Ngày sinh</Label>
                                    <Input type="date" id="birt" name="birt"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="birt">Ngày vào công ty</Label>
                                    <Input type="date" id="birt" name="birt"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="depart">Phòng ban</Label>
                                    <Input type="select" name="depart" id="depart">
                                        <Option>Sale</Option>
                                        <Option>HR</Option>
                                        <Option>Marketing</Option>
                                        <Option>IT</Option>
                                        <Option>Finance</Option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="salaryScale">Hệ số lương</Label>
                                    <Input type="text" id="salaryScale" name="salaryScale"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                                    <Input type="text" id="annualLeave" name="annualLeave"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="overTime">Số ngày nghỉ còn lại</Label>
                                    <Input type="text" id="overTime" name="overTime"></Input>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </div>
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
}




export default StaffList