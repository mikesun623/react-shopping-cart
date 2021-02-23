import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: null,
        };
    }
    openModal = (product) =>{
        this.setState({ product });
    };
    closeModal =()=>{
        this.setState({ product : null });
    };
    render() {
        const {product} = this.state;
        return (
            <div>
                <Fade bottom cascade>
                <ul className="productsfunc">
                    {this.props.productsfunc.map((productobject) => (
                        <li key={productobject._id}>
                            <div className="productcss">
                                <a 
                                    href={"#" + productobject._id} 
                                    onClick={()=> this.openModal(productobject)}
                                >
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
                </Fade>
                { product && (
                    <Modal isOpen={true} onRequestClose={this.closeModal}>
                        <Zoom>
                            <button className="close-modal"   onClick={this.closeModal}>
                                X
                            </button>
                            <div className="product-details">
                                <img src={product.image} alt={product.title}></img>
                                <div className="product-details-description">
                                    <p>
                                        <strong>{product.title}</strong>
                                    </p>
                                    <p>
                                        {product.description}
                                    </p>
                                    <p>
                                        Avaiable Sizes:{" "}
                                        {product.availableSizes.map(x=>(
                                            <span>{ " " } 
                                            <button className="button">{x}</button>
                                            </span>
                                        ))}
                                    </p>
                                    <div className="product-price">
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <button className="button primary" onClick={()=>{
                                            this.props.addToCart(product);
                                            this.closeModal();
                                        }}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                )}
            </div>
        );
    }
}
