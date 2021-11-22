import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap'
import { STAFFS } from './share/staffs';
import StaffList from './components/StaffListComponent';


class App extends Component {
  constructor(props){
    super(props)
    {
     this.state={
        staff:STAFFS
     }
    }
  }
  render()
  {
    return (
      <div>
        <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Quản lí nhân viên</NavbarBrand>
            </div>
        </Navbar>
       <StaffList staff={this.state.staff}></StaffList>
      </div>
    );
  }
}

export default App;
