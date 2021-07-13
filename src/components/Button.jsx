import React from 'react';

function Button({ outline, children, className }) {
  return (
    <button className={`button ${outline ? 'button--cart' : null} ${className}`}>{children}</button>
  );
}

export default Button;
