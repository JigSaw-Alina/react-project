import Logo from './Logo';
import Numresult from './Numresult';
import Search from './Search';

const NavBar = () => {
  return (
    <div className="App__nav-box">
      <Logo />
      <Search />
      <Numresult />
    </div>
  );
};

export default NavBar;
