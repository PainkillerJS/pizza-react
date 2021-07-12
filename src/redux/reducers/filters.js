const initialState = {
  category: null,
  sortBy: {
    type: 'rating',
    sort: 'desc',
  },
};

const filters = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SET_SORT_BY':
      return { ...state, sortBy: actions.payload };
    case 'SET_CATEGORY':
      return { ...state, category: actions.payload };
    default:
      return state;
  }
};

export default filters;
