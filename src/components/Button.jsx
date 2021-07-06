import React from 'react';

function Button({ outline, children }) {
  return <button className={`button ${outline ? 'button--cart' : null}`}>{children}</button>;
}

export default Button;
