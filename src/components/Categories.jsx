import React from 'react';

function Categories({ items }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((item, i) => (
          <li onClick={() => alert(i)} key={`${item}_${i}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
