import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import { initialItems } from './data/items';

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList initialItems={initialItems} />
    </div>
  );
};

export default App;
