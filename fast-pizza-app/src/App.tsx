import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { pizzaData } from './data/pizzaData';

const App = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer openHour={openHour} closeHour={closeHour} isOpen={isOpen} />
    </div>
  );
};

export default App;
