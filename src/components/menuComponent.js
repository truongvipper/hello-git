import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from "reactstrap"

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
function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() =>onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay body>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-6 mt-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;