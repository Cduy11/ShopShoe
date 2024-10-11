import shoeData from "../components/data/shoeData.json";

let intialState = {
  listShoe: shoeData,
  cart: [],
};

let shoeReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // tạo bản sao của cart
      let updateCart = [...state.cart];

      // tìm vị trí của sản phẩm
      const itemIndex = updateCart.findIndex(
        (item) => item.id === action.payload.id
      );

      // nếu sản phẩm đó chưa có thì thêm sản phẩm đó vào giỏ hàng
      if (itemIndex === -1) {
        updateCart.push({ ...action.payload, quantity: 1 });
      } else {
        updateCart[itemIndex].quantity += 1;
      }
      return { ...state, cart: updateCart };
    }
    case "REMOVE_ITEM": {
      let newCart = [...state.cart].filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: newCart };
    }
    case "INCREASE_ITEM": {
      // tạo bản sao cart
      let updateCart = [...state.cart];

      // tìm đến sản phẩm
      const itemIndex = updateCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        // tăng số lượng sản phẩm
        updateCart[itemIndex].quantity += 1;
      }

      return { ...state, cart: updateCart };
    }

    case "DECREASE_ITEM": {
      let updateCart = [...state.cart];
      const itemIndex = updateCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        if (updateCart[itemIndex].quantity === 0) {
        } else {
          updateCart[itemIndex].quantity -= 1;
        }
      }

      return { ...state, cart: updateCart };
    }

    default:
      return state;
  }
};

// đẩy shoeReducer ra store tổng
export default shoeReducer;
