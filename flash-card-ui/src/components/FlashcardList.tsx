import { useState } from 'react';
import type { Flashcard } from '../types/Flashcard';
import Card from './Card';

type FlashcardListProps = {
  flashcardData: Flashcard[];
};

const FlashcardList = ({ flashcardData }: FlashcardListProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="grid-wrapper">
      {flashcardData.map((card) => (
        <Card
          key={card.id}
          {...card}
          selectedId={selectedId}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default FlashcardList;
