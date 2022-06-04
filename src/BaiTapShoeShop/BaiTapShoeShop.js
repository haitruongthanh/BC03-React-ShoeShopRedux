/* eslint-disable no-sequences */
import React, { Component } from "react";
import Cart from "./Cart";
import MiniCart from "./MiniCart";
import ProductList from "./ProductList";
import "../BaiTapShoeShop/style.css";

export default class BaiTapShoeShop extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-10">
          <ProductList />
        </div>
        <div className="col-2">
          <Cart />
          <MiniCart />
        </div>
      </div>
    );
  }
}
