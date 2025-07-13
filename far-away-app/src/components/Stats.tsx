import type { StatsProps } from '../types/item';

const Stats = ({ items }: StatsProps) => {
  if (items.length === 0) {
    return (
      <p>
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100 || 0);
  return (
    <em>
      {percentage === 100
        ? 'You got everything! Ready to go ✈'
        : `👜 You have ${numItems} items on you list, and already packed ${numPacked}
      ${percentage}%`}
    </em>
  );
};

export default Stats;
