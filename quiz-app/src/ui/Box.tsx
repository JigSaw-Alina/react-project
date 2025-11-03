import { useDisclosure } from '@/hooks/use-disclosure';
import { type ReactNode } from 'react';

type ListboxProps = {
  children: ReactNode;
  isInitiallyOpen?: boolean;
};

const Box = ({ children, isInitiallyOpen }: ListboxProps) => {
  const { isOpen, toggle } = useDisclosure(isInitiallyOpen);

  return (
    <div className="main__box">
      <button className="main__btn--toggle" onClick={toggle}>
        {!isOpen ? '-' : '+'}
      </button>

      {!isOpen && children}
    </div>
  );
};

export default Box;
