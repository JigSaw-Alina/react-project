import type { Flashcard } from './Flashcard';

export type CardProps = Flashcard & {
  selectedId: number | null;
  handleClick: (id: number) => void;
};
