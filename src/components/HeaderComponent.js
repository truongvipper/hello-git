import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props);
        this.toggleNav=this.toggleNav.bind(this);
        this.state={
            isNavOpen:false
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
                                    <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span>Home</NavLink> 
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span>About us</NavLink> 
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span>Menu</NavLink> 
                                </NavItem>
                                <NavItem>
                                  <NavLink className="nav-link" to="/contact"><span className="fa fa-address-card fa-lg"></span>Contact us</NavLink>  
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Truong COCO</h1>
                                <p>Wecome sumernerrirp</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header;