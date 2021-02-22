import React, { Component } from "react";
import formatCurrency from "../util";

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="productsfunc">
                    {this.props.productsfunc.map((productobject) => (
                        <li key={productobject._id}>
                            <div className="productcss">
                                <a href={"#" + productobject._id}>
                                    <img src={productobject.image} alt={productobject.title}></img>
                                    <p>{productobject.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>{formatCurrency(productobject.price)}</div>
                                    <button 
                                        onClick={() => this.props.addToCart(productobject)} 
                                        className="button primary"
                                    >
                                        Add to Cart 
                                        </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
