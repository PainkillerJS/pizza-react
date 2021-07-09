import React from 'react';

import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ pizzas }) {
  console.log(pizzas);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((item) => (
          <PizzaBlock key={`${item.name}`} pizza={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
