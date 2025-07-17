function Progress({ index, numQuestions, points, maxPossiblePints }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / <strong>{maxPossiblePints}</strong> points
      </p>
    </header>
  );
}

export default Progress;
