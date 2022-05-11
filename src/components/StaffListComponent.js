import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Label,
  Input,
  FormGroup,
  FormFeedback,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent'; 
import { baseUrl } from "../share/baseUrl";

//Danh sách nhân viên
function RenderStaffItem({ staff }) {
  return (
    <Card className="card">
      <Link to={`/nhanvien/${staff.id}`}>
        <CardImg src={staff.image} alt={staff.name}></CardImg>
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
      staffList: this.props.staff.staff,
      searchText: "",
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "",
      annualLeave: "",
      overTime: "",
      salary: "",
      image: "/assets/images/alberto.png",
      isModalOpen: false,
      touched: {
        name: false,
        doB: false,
        salaryScale: false,
        startDate: false,
        department: false,
        annualLeave: false,
        overTime: false,
        salary: false,
        startDate: false,
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handelAdd = this.handelAdd.bind(this);
    this.handelBurl = this.handelBurl.bind(this);
    // this.handelInputChange = this.handelInputChange.bind(this);
    this.handelInputChange = this.handelInputChange.bind(this);
    this.findStaff = this.findStaff.bind(this);
  }


  //Hàm modal input
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  //Hàm lấy giá trị input
  handelInputChange(event) {
    let { name, value } = event.target;
    console.log('a')
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value,
      searchText: value,
    });
  }

  //Hàm thay đổi field
  handelBurl = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  //Hàm thêm nhân viên
  handelAdd(e) {
    e.preventDefault();
    const {
      name,
      salaryScale,
      startDate,
      department,
      salary,
      doB,
      annualLeave,
      overTime,
      staffList,
    } = this.state;
    // new staff
    const newStaff = {
      name,
      doB,
      salaryScale,
      startDate,
      department,
      annualLeave,
      overTime,
      salary,
      image: "/assets/images/alberto.png",
    };
    const staffs = [...staffList];
    staffs.push(newStaff);
    this.setState({
      staffList: staffs,
    });
  }

  //Hàm tìm nhân viên
  findStaff(e) {
    let { staffList, searchText } = this.state;
    //get value input
    e.preventDefault()
    console.log('kết quả trước khi tìm:', staffList);
    console.log('từ khóa:', searchText);
    if (searchText) {
      let resultStaffs = staffList.filter(staff => staff.name.toLowerCase().includes(searchText.toLowerCase()))
      console.log('kết quả sau khi tìm:', resultStaffs);
      this.setState({ staffList: [...resultStaffs] })
    } else {
      console.log('phục hồi lại tìm kiếm', this.props.staff);
      this.setState({ staffList: this.props.staff })
    }
  }
  //Validate form
  validate(name, salaryScale, annualLeave, overTime) {
    const errors = {
      name: "",
      salaryScale: "",
      department: "",
      annualLeave: "",
      overTime: "",
      salary: "",
    };
    if (this.state.touched.name && name.length <= 3) {
      errors.name = "Tên nên dài hơn 3 ký tự";
    } else if (this.state.touched.name && name.length >= 8) {
      errors.name = "Tên nên ngắn hơn 8 ký tự";
    }
    const reg = /([0-9]+\.[0-9]+)/;
    if (this.state.touched.salaryScale && !reg.test(salaryScale)) {
      errors.salaryScale = "Hệ số lương nên là số thập phân";
    }
    var reg1 = /^\d+$/;
    if (
      this.state.touched.annualLeave &&
      this.state.touched.overTime &&
      !reg1.test(annualLeave, overTime)
    ) {
      errors.annualLeave = "Số ngày nghỉ không hộp lệ";
      errors.overTime = "Số ngày làm thêm không hợp lệ";
    }
    return errors;
  }

  render() {
    //Taọ mới đối tượng nhân viên
    //Khai báo biến lỗi
    const errors = this.validate(
      this.state.name,
      this.state.salaryScale,
      this.state.annualLeave,
      this.state.overTime
    );
    console.log(this.state.staffList);
    const stafflist = this.state.staffList.map((staff) => {
      return (
        <div className="col-6 col-md-4 col-lg-2">
          <div key={staff.id}>
            <RenderStaffItem staff={staff} />
          </div>
        </div>
      );
    });
    // if (props.staffLoading) {
    //   return (
    //     <div className='container'>
    //       <div className='row'>
    //         <Loading />
    //       </div>
    //     </div>
    //   )
    // }
    // else if (errMess) {
    //   return (
    //     <div className='container'>
    //       <div className='row'>
    //         <h4>{staff.errMess}</h4>
    //       </div>
    //     </div>
    //   )
    // }
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/nhanvien">Nhân viên</Link>
              </BreadcrumbItem>
            </Breadcrumb>
            <Button onClick={this.toggleModal}>
              <span>
                <i class="fa fa-plus-square" aria-hidden="true"></i>
              </span>
            </Button>
            {/* Modal Form */}
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader className="text-center" toggle={this.toggleModal}>
                Thêm sinh viên
              </ModalHeader>
              <ModalBody>
                <Form onSubmit={this.handelAdd}>
                  <FormGroup>
                    <Label htmlFor="name">Tên</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Họ tên"
                      value={this.state.name}
                      onChange={this.handelInputChange}
                      onBlur={this.handelBurl("name")}
                      valid={errors.name === ""}
                      invalid={errors.name !== ""}
                    ></Input>
                    <FormFeedback>{errors.name}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="doB">Ngày sinh</Label>
                    <Input
                      type="date"
                      id="doB"
                      name="doB"
                      value={this.state.doB}
                      onChange={this.handelInputChange}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="startDate">Ngày vào công ty</Label>
                    <Input
                      type="date"
                      name="startDate"
                      id="startDate"
                      value={this.state.startDate}
                      onChange={this.handelInputChange}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="department">Phòng ban</Label>
                    <Input
                      type="select"
                      name="department"
                      value={this.state.department}
                      onChange={this.handelInputChange}
                    >
                      <option>Sale</option>
                      <option>HR</option>
                      <option>Marketing</option>
                      <option>IT</option>
                      <option>Finance</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="salaryScale">Hệ số lương</Label>
                    <Input
                      type="text"
                      id="salaryScale"
                      name="salaryScale"
                      value={this.state.salaryScale}
                      onChange={this.handelInputChange}
                      onBlur={this.handelBurl("salaryScale")}
                      valid={errors.salaryScale === ""}
                      invalid={errors.salaryScale !== ""}
                    ></Input>
                    <FormFeedback>{errors.salaryScale}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                    <Input
                      type="text"
                      id="annualLeave"
                      name="annualLeave"
                      value={this.state.annualLeave}
                      onChange={this.handelInputChange}
                      onBlur={this.handelBurl("annualLeave")}
                      valid={errors.annualLeave === ""}
                      invalid={errors.annualLeave !== ""}
                    ></Input>
                    <FormFeedback>{errors.annualLeave}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="overTime">Số ngày tăng ca</Label>
                    <Input
                      type="text"
                      id="overTime"
                      name="overTime"
                      value={this.state.overTime}
                      onChange={this.handelInputChange}
                      onBlur={this.handelBurl("overTime")}
                      valid={errors.overTime === ""}
                      invalid={errors.overTime !== ""}
                    ></Input>
                    <FormFeedback>{errors.overTime}</FormFeedback>
                  </FormGroup>
                  <Button type="submit" class="btn btn-primary">
                    Thêm sinh viên
                  </Button>
                </Form>
              </ModalBody>
            </Modal>
          </div>
          <div className="col-4">
            <h3>Danh Sách nhân viên</h3>
          </div>
          <div className="col-4">
            {/* //Form them sinh vien */}
            <div className="d-flex justify-content-start">
              <Input className="w-100" name="search"
                value={this.state.search} type="text"
                onChange={this.handelInputChange} id="search"></Input>

              <button
                class="btn btn-outline-secondary"
                type="submit"
                onClick={this.findStaff}
              >
                Tìm
              </button>
            </div>
          </div>
        </div>
        <div className="row">{stafflist}
        </div>

      </div>
    );
  }
}

export default StaffList;
