function FinishedScreen({ points, maxPossiblePints }) {
  const percentge = (points / maxPossiblePints) * 100;
  return (
    <p className="results">
      You scored <strong>{points}</strong> out of
      <strong>maxPossiblePints</strong> ({Math.ceil(percentge)})
    </p>
  );
}

export default FinishedScreen;
