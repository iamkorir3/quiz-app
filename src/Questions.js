function Questions({ children, Question }) {
  console.log(Question);
  return (
    <div>
      {children}
      {/* <h4>{Question.Question}</h4> */}
    </div>
  );
}

export default Questions;
