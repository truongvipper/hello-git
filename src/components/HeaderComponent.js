import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props);
        this.toggleNav=this.toggleNav.bind(this);
        this.state={
            isNavOpen:false,
        }
    }
    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" alt="Logo restaurant"></img>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem >
                                    <NavLink className="nav-link" to="/nhanvien"><span className="fa fa-users fa-lg"></span>Nhân viên</NavLink> 
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" to="/phongban"><span className="fa fa-id-card fa-lg"></span>Phòng ban</NavLink> 
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/bangluong"><span className="fa fa-money fa-lg"></span>Bảng Lương</NavLink> 
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;