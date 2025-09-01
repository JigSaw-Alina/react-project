import type { ReactNode } from 'react';
import Logo from './Logo';

type NavBarProps = {
  children: ReactNode;
};

const NavBar = ({ children }: NavBarProps) => {
  return (
    <div className="App__nav">
      <div className="App__nav-box">
        <Logo />
        {children}
      </div>
    </div>
  );
};

export default NavBar;
