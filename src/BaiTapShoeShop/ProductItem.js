/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ADD_TO_CART,
  TONG_TIEN,
  TOTAL_PRODUCT,
} from "./redux/constant/constant";

class ProductItem extends Component {
  render() {
    let { name, price, image } = this.props.data;
    return (
      <div className="col-md-3 col-sm-3">
        <div className="product-grid">
          <div className="product-image">
            <a className="image">
              <img className="pic-1" src={image} />
              <img className="pic-2" src={image} />
            </a>
            <a className="product-like-icon">
              <i className="far fa-heart" />
            </a>
            <ul className="product-links">
              <li className="text-center">
                <a
                  onClick={() => {
                    this.props.handleAddToCart(this.props.data);
                    this.props.handleTotalProduct();
                    this.props.handleTotalAmount();
                  }}
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </li>
            </ul>
          </div>
          <div className="product-content">
            <h3 className="title">
              <a>{name}</a>
            </h3>
            <div className="price">$ {price}</div>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (product) => {
      dispatch({
        type: ADD_TO_CART,
        payload: product,
      });
    },
    handleTotalProduct: () => {
      dispatch({
        type: TOTAL_PRODUCT,
      });
    },
    handleTotalAmount: () => {
      dispatch({
        type: TONG_TIEN,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
