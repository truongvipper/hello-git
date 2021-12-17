import React, { Component } from "react";
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col
} from 'reactstrap';
import { DISHES } from "../share/dishes";
import {Link} from 'react-router-dom'

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>
                    {dish.description}
                </CardText>
            </CardBody>
        </Card>
    );
}
function RenderComment({comments}){
    // const comments = props.comments
    return (
        <Card>
            {
                comments.map(c => {
                    return <div>
                        <CardText>{c.comment}</CardText>
                        <CardText>{c.author}</CardText>
                    </div>
                })
            }
        </Card>
    )
}

// var dishes=this.state.dish;
// var dish = this.props.dish;
const Detail = (props) => {
    const dish = props.dish
    return dish ? (
        <div className="container">
             <div className="row">
                <Breadcrumb>
                    {/* <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem> */}
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-6">
                    <RenderComment comments={props.comments}></RenderComment>
                </div>
            </div>
        </div>
    ) : null
}

export default Detail