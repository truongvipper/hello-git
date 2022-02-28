import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Button, Label, Input, FormGroup, FormFeedback} from "reactstrap"
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
            isModalOpen:false,
            touched:{
                name: false,
                doB: false,
                salaryScale: false,
                startDate: false,
                department: false,
                annualLeave: false,
                overTime: false,
                salary: false,
                startDate:false
            }
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handelAdd=this.handelAdd.bind(this);
        this.handelBurl=this.handelBurl.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }
    handelInputChange(event){
        const target=event.target;
        const name=event.name;
        const value = target.type
        this.setState({
            [name]:value
        })
    }
    handelBurl=(field)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched,[field]:true}
        })
    }

    validate(name,salaryScale,annualLeave,overTime){
        const errors={
            name: '',
            salaryScale: '',
            department: '',
            annualLeave: '',
            overTime: '',
            salary: '',
        }
        if(this.state.touched.name && name.length<=3){
            errors.name='Tên nên dài hơn 3 ký tự'
        } else if(this.state.touched.name && name.length>=8){
            errors.name='Tên nên ngắn hơn 8 ký tự'
        }
        const reg=/([0-9]+\.[0-9]+)/;
        if(this.state.touched.salaryScale && !reg.test(salaryScale)){
            errors.salaryScale='Hệ số lương nên là số thập phân'
        }

        if(this.state.touched.annualLeave && this.state.touched.overTime && !reg.test(annualLeave,overTime)){
            errors.annualLeave='Số ngày nghỉ không hộp lệ';
            errors.overTime='Số ngày làm thêm không hợp lệ'
        }
    }

    render() {
        const errors=this.validate(this.state.name,this.state.salaryScale,this.state.annualLeave,this.state.overTime)
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
                                    <Input type="text" id="name" name="name" 
                                    placeholder="Họ tên" 
                                    value={this.state.name} 
                                    onChage={this.handelInputChange} 
                                    onBlur={this.handelBurl('name')}
                                    valid={errors.name===''}
                                    invalid={errors.name !==''}></Input>
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="birt">Ngày sinh</Label>
                                    <Input type="date" id="birt" name="birt" value={this.state.doB} placeholder="dd/mm/yy" onChage={this.handelInputChange}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="start">Ngày vào công ty</Label>
                                    <Input type="date" id="start" name="start" value={this.state.startDate} onChage={this.handelInputChange}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="depart">Phòng ban</Label>
                                    <Input type="select" name="depart" id="depart" value={this.state.department} onChage={this.handelInputChange}>
                                        <Option>Sale</Option>
                                        <Option>HR</Option>
                                        <Option>Marketing</Option>
                                        <Option>IT</Option>
                                        <Option>Finance</Option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="salaryScale">Hệ số lương</Label>
                                    <Input type="text" id="salaryScale" name="salaryScale" value={this.state.salaryScale} onChage={this.handelInputChange} onBlur={this.handelBurl('salaryScale')} 
                                     valid={errors.salaryScale===''}
                                     invalid={errors.salaryScale !==''}></Input>
                                    <FormFeedback>{errors.salaryScale}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                                    <Input type="text" id="annualLeave" name="annualLeave" value={this.state.annualLeave} onChage={this.handelInputChange} onBlur={this.handelBurl('annualLeave')}
                                     valid={errors.annualLeave===''}
                                     invalid={errors.annualLeave !==''}></Input>
                                    <FormFeedback>{errors.annualLeave}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="overTime">Số ngày tăng ca</Label>
                                    <Input type="text" id="overTime" name="overTime" value={this.state.overTime} onChage={this.handelInputChange} onBlur={this.handelBurl('overTime')} 
                                     valid={errors.overTime===''}
                                     invalid={errors.overTime !==''}></Input>
                                    <FormFeedback>{errors.overTime}</FormFeedback>
                                </FormGroup>
                                <Button type="submit" class="btn btn-primary">Thêm sinh viên</Button>
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