import { UseDisclosure } from '@/hooks/use-disclosure';
import { type ReactNode } from 'react';

type ListboxProps = {
  children: ReactNode;
};

const Box = ({ children }: ListboxProps) => {
  const { isOpen, toggle } = UseDisclosure();

  return (
    <div className="main__box">
      <button className="main__btn--toggle" onClick={toggle}>
        {isOpen ? '-' : '+'}
      </button>

      {isOpen && children}
    </div>
  );
};

export default Box;
