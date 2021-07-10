import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';
import { setCategory } from '../redux/actions/filters';

const items = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortType = ['популярности', 'цене', 'алфавиту'];

function Home() {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = React.useCallback((i) => dispatch(setCategory(i)), []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={items} />
        <SortPopup items={sortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
