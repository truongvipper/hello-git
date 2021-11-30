import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody,Breadcrumb,BreadcrumbItem } from "reactstrap"
import { Link } from 'react-router-dom';
// renderDish(dish){
//     if(dish!=null){
//         return(
//             <Card>
//                  <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
//                  <CardBody>
//                  <CardTitle>{dish.name}</CardTitle>
//                  <CardText>
//                      {dish.description}
//                  </CardText>
//                  </CardBody>
//             </Card>
//         );
//     } else{
//         return (
//             <div></div>
//         )
//     }
// }
// onClick={()=>onClick(dish.id)}
function RenderMenuItem({ dish, onClick }) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardImgOverlay body>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>

        </Card>
    );
}
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-6 mt-1">
                {/* onClick={props.onClick} */}
                <RenderMenuItem dish={dish} />
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;