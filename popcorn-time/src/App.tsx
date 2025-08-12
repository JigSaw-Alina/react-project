import NavBar from '../components/NavBar';

const App = () => {
  return (
    <div className="App">
      <div className="App__nav">
        <NavBar />
      </div>
      <div className="App__grid-box">
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default App;
