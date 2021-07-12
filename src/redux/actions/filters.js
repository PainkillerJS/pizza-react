export const setSortBy = (type, sort) => ({ type: 'SET_SORT_BY', payload: { type, sort } });

export const setCategory = (catIndex) => ({ type: 'SET_CATEGORY', payload: catIndex });
