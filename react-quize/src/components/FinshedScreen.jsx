function FinshedScreen({ points, maxPossiblePoint, hightscore }) {
  const percentage = (points / maxPossiblePoint) * 100;
  let emoji;
  if (percentage >= 90) emoji = "🥇";
  if (percentage >= 70 && percentage < 90) emoji = "🥈";
  if (percentage >= 50 && percentage < 70) emoji = "🥉";
  if (percentage >= 0 && percentage < 50) emoji = "😐";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> YOU scroed <strong>{points}</strong> out of
        {maxPossiblePoint}({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(hightscore: {hightscore} points)</p>
    </>
  );
}

export default FinshedScreen;
