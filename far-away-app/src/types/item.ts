export type ItemType = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

export type ItemProps = ItemType & {
  onDeleteItems: (id: number) => void;
  onToggleItem: (id: number) => void;
};

export type PackingListProps = {
  items: ItemType[];
  onDeleteItems: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearItems: () => void;
};

export type FormProps = {
  onAddItems: (item: ItemType) => void;
};

export type StatsProps = {
  items: ItemType[];
};
