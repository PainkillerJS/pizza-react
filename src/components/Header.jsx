import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartIconWhite } from '../assets/componentSvg';
import pizzaLogo from '../assets/img/pizza-logo.svg';
import Button from './Button';

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div className='header'>
      <div className='container'>
        <Link to='/'>
          <div className='header__logo'>
            <img width='38' src={pizzaLogo} alt='Pizza logo' />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className='header__cart'>
          <Link to='/cart'>
            <Button outline>
              <span>{totalPrice} ₽</span>
              <div className='button__delimiter'></div>
              <CartIconWhite />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
