import { memo } from 'react';

const Categories = memo(function Categories({ activeCategory, items, onClickItem }) {
  return (
    <div className='categories'>
      <ul>
        <li onClick={() => onClickItem(null)} className={activeCategory === null ? 'active' : null}>
          Все
        </li>
        {items &&
          items.map((item, i) => (
            <li onClick={() => onClickItem(i)} className={activeCategory === i ? 'active' : null} key={`${item}_${i}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
