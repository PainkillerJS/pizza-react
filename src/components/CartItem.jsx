import { Minus, Remove, OrangePlus } from '../assets/componentSvg';
import Button from './Button';

function CartItem({ id, name, size, type, totalPrice, totalCount, onRemove, onMinus, onPlus }) {
  const handleRemoveClick = () => onRemove(id);
  const handlePlusItem = () => onPlus(id);
  const handleMinusItem = () => onMinus(id);

  return (
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img
          className='pizza-block__image'
          src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
          alt='Pizza'
        />
      </div>
      <div className='cart__item-info'>
        <h3>{name}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>
      <div className='cart__item-count'>
        <div className='button button--outline button--circle cart__item-count-minus' onClick={handleMinusItem}>
          <Minus />
        </div>
        <b>{totalCount}</b>{' '}
        <div className='button button--outline button--circle cart__item-count-plus' onClick={handlePlusItem}>
          <OrangePlus />
        </div>
      </div>
      <div className='cart__item-price'>
        <b>{totalPrice} ₽</b>
      </div>
      <div className='cart__item-remove'>
        <Button className='button--circle' outline onClick={handleRemoveClick}>
          <Remove />
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
