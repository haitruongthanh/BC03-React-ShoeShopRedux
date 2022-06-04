import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.shoeList.map((item, i) => {
            return <ProductItem data={item} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return { shoeList: state.ShoeShopReducer.shoeList };
};

export default connect(mapStateToProps)(ProductList);
