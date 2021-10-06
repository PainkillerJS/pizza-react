const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((startPrice, obj) => obj.price + startPrice, 0);

function cart(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzasItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzasItems,
          totalPrice: getTotalPrice(currentPizzasItems),
        },
      };

      const totalCount = Object.keys(newItems).reduce((sum, key) => sum + newItems[key].items.length, 0);
      const totalPrice = Object.keys(newItems).reduce((sum, key) => sum + newItems[key].totalPrice, 0);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'CLEAR_CART':
      return { totalPrice: 0, totalCount: 0, items: {} };

    case 'REMOVE_CART_ITEM':
      const newItems = { ...state.items };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };

    case 'PLUS_CART_ITEM': {
      const newItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];

      const newStateItems = {
        ...state.items,
        [action.payload]: {
          items: newItems,
          totalPrice: getTotalPrice(newItems),
        },
      };

      const totalCount = Object.keys(newStateItems).reduce((sum, key) => sum + newStateItems[key].items.length, 0);
      const totalPrice = Object.keys(newStateItems).reduce((sum, key) => sum + newStateItems[key].totalPrice, 0);

      return {
        ...state,
        items: newStateItems,
        totalPrice,
        totalCount,
      };
    }

    case 'MINUS_CART_ITEM': {
      const oldItems = [...state.items[action.payload].items];
      const newItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;

      const newStateItems = {
        ...state.items,
        [action.payload]: {
          items: newItems,
          totalPrice: getTotalPrice(newItems),
        },
      };

      const totalCount = Object.keys(newStateItems).reduce((sum, key) => sum + newStateItems[key].items.length, 0);
      const totalPrice = Object.keys(newStateItems).reduce((sum, key) => sum + newStateItems[key].totalPrice, 0);

      return {
        ...state,
        items: newStateItems,
        totalPrice,
        totalCount,
      };
    }

    default:
      return state;
  }
}

export default cart;
