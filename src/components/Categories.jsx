import React, { useState } from 'react';

function Categories({ items }) {
  const [active, setActive] = useState(null);

  return (
    <div className="categories">
      <ul>
        <li onClick={() => setActive(null)} className={active === null ? 'active' : null}>
          Все
        </li>
        {items &&
          items.map((item, i) => (
            <li
              onClick={() => setActive(i)}
              className={active === i ? 'active' : null}
              key={`${item}_${i}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
