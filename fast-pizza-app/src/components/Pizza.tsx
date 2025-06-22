import type { Pizza as PizzaType } from '../types/pizza';

const Pizza = ({ name, ingredients, price, image, soldOut }: PizzaType) => {
  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'SOLD OUT' : price}</span>
      </div>
    </li>
  );
};

export default Pizza;
