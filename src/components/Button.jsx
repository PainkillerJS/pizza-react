function Button({ outline, children, className, onClick }) {
  return (
    <button onClick={onClick} className={`button ${outline ? 'button--cart' : null} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
