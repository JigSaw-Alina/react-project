import FlashcardList from './components/FlashcardList';
import { nbaFlashcards } from './data/nbaData';

const App = () => {
  return (
    <div className="App">
      <FlashcardList flashcardData={nbaFlashcards} />
    </div>
  );
};

export default App;
