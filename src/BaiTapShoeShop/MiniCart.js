import React, { Component } from "react";
import { connect } from "react-redux";

class MiniCart extends Component {
  render() {
    return (
      <div className="sticky-top">
        <h4>Giỏ hàng ( {this.props.totalProduct} ) </h4>
        <button
          type="button"
          className="btn btn-outline-warning"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Xem Giỏ Hàng
        </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return { totalProduct: state.ShoeShopReducer.totalProduct };
};

export default connect(mapStateToProps)(MiniCart);
