const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SET_PIZZAS':
      return { ...state, items: actions.payload, isLoaded: true };
    case 'SET_LOADED':
      return { ...state, isLoaded: actions.payload };
    default:
      return state;
  }
};

export default pizzas;
