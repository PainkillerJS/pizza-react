import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CartItem } from '../components';
import { clearCart, removeCartItem, minusCartItem, plusCartItem } from '../redux/actions/cart';
import emptyCart from '../assets/img/empty-cart.png';
import trashIcon from '../assets/img/trash.svg';
import arrowLeftGray from '../assets/img/grey-arrow-left.svg';
import { CartIconBlack } from '../assets/componentSvg';

function Cart() {
  const dispatch = useDispatch();

  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
  const addedPizzas = Object.keys(items).map((key) => items[key].items[0]);

  const onRemoveItem = useCallback((id) => {
    window.confirm('Удалить пиццу?') && dispatch(removeCartItem(id));
    // eslint-disable-next-line
  }, []);

  const onClearCart = useCallback(() => {
    window.confirm('Очистить корзину') && dispatch(clearCart());
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line
  const onPlusItem = useCallback((id) => dispatch(plusCartItem(id)), []);
  // eslint-disable-next-line
  const onMinusItem = useCallback((id) => dispatch(minusCartItem(id)), []);

  return (
    <div className='container container--cart'>
      {totalCount ? (
        <div className='cart'>
          <div className='cart__top'>
            <h2 className='content__title'>
              <CartIconBlack />
              Корзина
            </h2>
            <div className='cart__clear'>
              <img alt='trash' src={trashIcon} />
              <span onClick={onClearCart}>Очистить корзину</span>
            </div>
          </div>
          <div className='content__items'>
            {addedPizzas.map((item) => (
              <CartItem
                {...item}
                key={item.name}
                totalPrice={items[item.id].totalPrice}
                totalCount={items[item.id].items.length}
                onRemove={onRemoveItem}
                onMinus={onMinusItem}
                onPlus={onPlusItem}
              />
            ))}
          </div>
          <div className='cart__bottom'>
            <div className='cart__bottom-details'>
              <span>
                Всего пицц: <b>{totalCount} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₽</b>
              </span>
            </div>
            <div className='cart__bottom-buttons'>
              <Link to='/' className='button button--outline button--add go-back-btn'>
                <img alt='arrow-left-gray' src={arrowLeftGray} />
                <span>Вернуться назад</span>
              </Link>
              <div className='button pay-btn'>
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='cart cart--empty'>
          <h2>
            Корзина пустая <icon>😕</icon>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={emptyCart} alt='Empty cart' />
          <Link to='/' className='button button--black'>
            <span>Вернуться назад</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
