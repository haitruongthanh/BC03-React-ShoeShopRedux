/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  TANG_SO_LUONG,
  TONG_TIEN,
  TOTAL_PRODUCT,
  XOA_SAN_PHAM,
} from "./redux/constant/constant";
import { GIAM_SO_LUONG } from "./redux/constant/constant";

class Cart extends Component {
  render() {
    return (
      <div
        className="modal fade bd-example-modal-lg"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-success">
              <h5 className="modal-title text-light" id="exampleModalLabel">
                Giỏ hàng
              </h5>
              <button
                type="button"
                className="close text-light"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    {/* <th scope="col">Image</th> */}
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Total amount</th>
                    <th scope="col">Function</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cart.map(({ id, quantity, price, name }, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{id}</th>
                        <td>{name}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-success mr-2"
                            onClick={() => {
                              this.props.handleIncreaseQuantity(id);
                              this.props.handleTotalProduct();
                              this.props.handleTotalAmount();
                            }}
                          >
                            +
                          </button>
                          {quantity}
                          <button
                            type="button"
                            className="btn btn-outline-secondary ml-2"
                            onClick={() => {
                              this.props.handleDecreaseQuantity(id);
                              this.props.handleTotalProduct();
                              this.props.handleTotalAmount();
                            }}
                          >
                            -
                          </button>
                        </td>
                        <td>$ {price}</td>
                        <td>$ {quantity * price}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => {
                              this.props.handleDeleteProduct(id);
                              this.props.handleTotalAmount();
                              this.props.handleTotalProduct();
                            }}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer bg-light">
              <div className="lead mr-auto">
                <h4>Tổng số tiền $ {this.props.totalAmount}</h4>
              </div>
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Thanh Toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.ShoeShopReducer.gioHang,
    totalAmount: state.ShoeShopReducer.totalAmount,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleDeleteProduct: (id) => {
      dispatch({
        type: XOA_SAN_PHAM,
        payload: id,
      });
    },
    handleIncreaseQuantity: (id) => {
      dispatch({
        type: TANG_SO_LUONG,
        payload: id,
      });
    },
    handleDecreaseQuantity: (id) => {
      dispatch({
        type: GIAM_SO_LUONG,
        payload: id,
      });
    },
    handleTotalAmount: () => {
      dispatch({
        type: TONG_TIEN,
      });
    },
    handleTotalProduct: () => {
      dispatch({
        type: TOTAL_PRODUCT,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
