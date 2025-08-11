import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onclick?: () => void;
};

const Button = ({ children, onclick }: ButtonProps) => {
  return <button onClick={onclick}>{children}</button>;
};

export default Button;

// onclick: () => void;
// type: 'submit';
// className?: string;

// , onclick, type, className
// onClick={onclick} type={type} className={className}
