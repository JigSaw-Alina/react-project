import type { OrderProps } from '../types/time';

const Order = ({ openHour, closeHour }: OrderProps) => {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
