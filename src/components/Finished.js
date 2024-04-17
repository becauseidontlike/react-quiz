function Finished({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎖️";
  if (percentage >= 50 && percentage < 80) emoji = "🫡";
  if (percentage < 50) emoji = "😐";

  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {Math.ceil(percentage)}%) <span>{emoji}</span>
    </p>
  );
}

export default Finished;
