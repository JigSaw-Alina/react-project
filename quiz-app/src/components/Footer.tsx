import { ReactNode } from 'react';

type FooterProps = {
  children: ReactNode;
};

const Footer = ({ children }: FooterProps) => {
  return <div>{children}</div>;
};

export default Footer;
