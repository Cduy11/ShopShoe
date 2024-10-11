export const AddToCart = (shoes) => {
  return {
    type: "ADD_TO_CART",
    payload: shoes,
  };
};

export const RemoveItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: {id},
  }
}

export const Increase = (id) => {
  return {
    type: "INCREASE_ITEM",
    payload: {id},
  }
}

export const Decrease = (id) => {
  return{
    type: "DECREASE_ITEM",
    payload: {id},
  }
}