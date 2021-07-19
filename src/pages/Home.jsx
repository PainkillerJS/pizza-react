import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const items = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortType = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items);
  const {
    category,
    sortBy: { type, sort },
  } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sort, type));
  }, [category, sort]);

  const onSelectCategory = React.useCallback((i) => dispatch(setCategory(i)), []);
  const onSelectSortType = React.useCallback((type, sort) => dispatch(setSortBy(type, sort)), []);
  const handleAddPizzaToCard = (obj) => dispatch(addPizzaToCart(obj));

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={items} activeCategory={category} />
        <SortPopup activeSortBy={type} items={sortType} onSelectSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((item) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCard}
                cartCount={cartItems[item.id] && cartItems[item.id].items.length}
                key={item.id}
                {...item}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, i) => <PizzaLoadingBlock key={i} />)}
      </div>
    </div>
  );
}

export default Home;
