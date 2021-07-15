import axios from 'axios';

export const setLoaded = (val) => ({ type: 'SET_LOADED', payload: val });

export const setPizzas = (items) => ({ type: 'SET_PIZZAS', payload: items });

export const fetchPizzas = (category, sort, type) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(`/pizzas?${category !== null ? 'category=' + category : ' '}&_sort=${type}&_order=${sort}`)
    .then(({ data }) => dispatch(setPizzas(data)));
};
