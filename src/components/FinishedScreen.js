function FinishedScreen({ points, maxPossiblePints, highscore, dispatch }) {
  const percentge = (points / maxPossiblePints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of
        <strong>maxPossiblePints</strong> ({Math.ceil(percentge)})%
      </p>
      <p className="highscore">Highscore: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishedScreen;
