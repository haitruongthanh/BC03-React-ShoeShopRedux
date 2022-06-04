import { dataShoe } from "../../dataShoeShop";
import {
  ADD_TO_CART,
  GIAM_SO_LUONG,
  TANG_SO_LUONG,
  TONG_TIEN,
  TOTAL_PRODUCT,
  XOA_SAN_PHAM,
} from "../constant/constant";

let initialState = {
  shoeList: dataShoe,
  gioHang: [],
  totalProduct: 0,
  totalAmount: 0,
};

export const ShoeShopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      let cloneCart = [...state.gioHang];
      let index = cloneCart.findIndex((item) => {
        return item.id === payload.id;
      });
      if (index === -1) {
        let newProduct = { ...payload, quantity: 1 };
        cloneCart.push(newProduct);
      } else {
        cloneCart[index].quantity++;
      }
      state.gioHang = cloneCart;

      let dataJSON = JSON.stringify(state);
      state = JSON.parse(dataJSON);

      return { ...state };
    }

    case TOTAL_PRODUCT: {
      let cloneCart = [...state.gioHang];
      let cloneTotalProduct = 0;
      cloneCart.forEach(function (item) {
        cloneTotalProduct += item.quantity;
        return cloneTotalProduct;
      });
      state.totalProduct = cloneTotalProduct;
      state.gioHang = cloneCart;

      let dataJSON = JSON.stringify(state);
      state = JSON.parse(dataJSON);

      return { ...state };
    }

    case XOA_SAN_PHAM: {
      let cloneCart = [...state.gioHang];
      let index = cloneCart.findIndex((item) => {
        return item.id === payload;
      });

      if (index !== -1) {
        cloneCart.splice(index, 1);
        state.gioHang = cloneCart;
      }
      let dataJSON = JSON.stringify(state);
      state = JSON.parse(dataJSON);

      return { ...state };
    }

    case TANG_SO_LUONG: {
      let cloneCart = [...state.gioHang];
      let index = cloneCart.findIndex((item) => {
        return item.id === payload;
      });
      if (index !== -1) {
        cloneCart[index].quantity++;
        state.gioHang = cloneCart;
      }

      let dataJSON = JSON.stringify(state);
      state = JSON.parse(dataJSON);

      return { ...state };
    }

    case GIAM_SO_LUONG: {
      let cloneCart = [...state.gioHang];
      let index = cloneCart.findIndex((item) => {
        return item.id === payload;
      });
      if (index !== -1) {
        cloneCart[index].quantity--;
      }

      if (cloneCart[index].quantity === 0) {
        cloneCart.splice(index, 1);
      }
      state.gioHang = cloneCart;

      let dataJSON = JSON.stringify(state);
      state = JSON.parse(dataJSON);

      return { ...state };
    }

    case TONG_TIEN: {
      let cloneCart = [...state.gioHang];
      let cloneTotalAmount = 0;
      if (cloneCart.length !== 0) {
        cloneTotalAmount = cloneCart
          .map((item) => item.quantity * item.price)
          .reduce((pre, next) => pre + next);
      }
      state.totalAmount = cloneTotalAmount;

      let dataJSON = JSON.stringify(state);
      state = JSON.parse(dataJSON);

      return { ...state };
    }

    default:
      return state;
  }
};
