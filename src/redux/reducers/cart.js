const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

function cart(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const newObj = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      const allPizzas = [].concat.apply([], Object.values(newObj));

      return {
        ...state,
        items: newObj,
        totalCount: allPizzas.length,
        totalPrice: allPizzas.reduce((startPrice, obj) => obj.price + startPrice, 0),
      };
    }

    default:
      return state;
  }
}

export default cart;
