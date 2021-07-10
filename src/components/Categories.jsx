import React, { useState } from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [active, setActive] = useState(null);

  function setActiveItem(i) {
    setActive(i);
    onClickItem(i);
  }

  return (
    <div className="categories">
      <ul>
        <li onClick={() => setActiveItem(null)} className={active === null ? 'active' : null}>
          Все
        </li>
        {items &&
          items.map((item, i) => (
            <li
              onClick={() => setActiveItem(i)}
              className={active === i ? 'active' : null}
              key={`${item}_${i}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
