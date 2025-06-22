import type { FooterProps } from '../types/time';
import Order from './Order';

const Footer = ({ openHour, closeHour, isOpen }: FooterProps) => {
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
