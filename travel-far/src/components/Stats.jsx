export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some item to your packing list🛒</em>
      </p>
    );
  const numitems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numitems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everthing! Ready to go ✈️"
          : `You have ${numitems} items on your list, and you already packed
        ${numPacked} (${percentage})`}
      </em>
    </footer>
  );
}
