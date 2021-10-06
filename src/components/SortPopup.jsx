import { useState, memo, useRef, useEffect, useCallback } from 'react';
import { ArrowBlack } from '../assets/componentSvg';

const SortPopup = memo(function SortPopup({ items, onSelectSortType, activeSortBy }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();

  const activeLabel = items.find((obj) => obj.type === activeSortBy).name;

  const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup);

  const changeActivePopup = (type, sort) => {
    onSelectSortType(type, sort);
    setVisiblePopup(false);
  };

  const handleOutsideClick = useCallback((e) => {
    !e.path.includes(sortRef.current) && setVisiblePopup(false);
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    // eslint-disable-next-line
  }, []);

  return (
    <div ref={sortRef} className='sort'>
      <div className='sort__label'>
        <ArrowBlack />
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className='sort__popup'>
          <ul>
            {items &&
              items.map(({ name, type, order }) => (
                <li
                  onClick={() => changeActivePopup(type, order)}
                  key={name}
                  className={type === activeSortBy ? 'active' : null}>
                  {name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SortPopup;
