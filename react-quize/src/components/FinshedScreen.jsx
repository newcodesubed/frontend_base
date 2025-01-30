function FinshedScreen({ points, maxPossiblePoint }) {
  const percentage = (points / maxPossiblePoint) * 100;
  return (
    <p className="result">
      YOU scroed <strong>{points}</strong> out of {maxPossiblePoint}(
      {Math.ceil(percentage)}%)
    </p>
  );
}

export default FinshedScreen;
