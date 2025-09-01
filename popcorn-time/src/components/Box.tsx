import { useState, type ReactNode } from 'react';

type ListboxProps = {
  children: ReactNode;
};

const Box = ({ children }: ListboxProps) => {
  const [isOpen1, SetIsOpen1] = useState<boolean>(true);

  return (
    <div className="main__box">
      <button
        className="main__btn--toggle"
        onClick={() => SetIsOpen1((open) => !open)}
      >
        {isOpen1 ? '-' : '+'}
      </button>

      {isOpen1 && children}
    </div>
  );
};

export default Box;
