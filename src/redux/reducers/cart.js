const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotal = (arr) => arr.reduce((startPrice, obj) => obj.price + startPrice, 0);

function cart(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizza = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newObj = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizza,
          totalPrice: getTotal(currentPizza),
        },
      };
      const items = Object.values(newObj).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], Object.values(items));

      return {
        ...state,
        items: newObj,
        totalCount: allPizzas.length,
        totalPrice: getTotal(allPizzas),
      };
    }

    default:
      return state;
  }
}

export default cart;
