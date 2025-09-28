import type { ReactNode } from 'react';

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return <main className="main">{children}</main>;
};

export default Main;
