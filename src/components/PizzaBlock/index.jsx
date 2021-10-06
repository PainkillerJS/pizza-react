import { useState, useCallback } from 'react';
import classNames from 'classnames';
import { WhitePlus } from '../../assets/componentSvg';
import Button from '../Button';

const avaiblesType = ['тонкое', 'традиционное'];
const avaiblesSize = [26, 30, 40];

function PizzaBlock({ id, name, imageUrl, price, types, sizes, onClickAddPizza, cartCount }) {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const onSelectType = useCallback((i) => setActiveType(i), []);
  const onSelectSize = useCallback((i) => setActiveSize(i), []);

  const onClickPizza = () =>
    onClickAddPizza({
      id,
      name,
      imageUrl,
      price,
      size: activeSize,
      type: avaiblesType[activeType],
    });

  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
      <h4 className='pizza-block__title'>{name}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {avaiblesType.map((type, i) => (
            <li
              key={`${type}_${i}`}
              onClick={() => onSelectType(i)}
              className={classNames({
                active: i === activeType,
                disabled: !types.includes(i),
              })}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {avaiblesSize.map((size) => (
            <li
              key={size}
              onClick={() => onSelectSize(size)}
              className={classNames({
                active: size === activeSize,
                disabled: !sizes.includes(size),
              })}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {price} ₽</div>
        <Button className='button--add' outline onClick={onClickPizza}>
          <WhitePlus />
          <span>Добавить</span>
          <i>{cartCount}</i>
        </Button>
      </div>
    </div>
  );
}

export default PizzaBlock;
