import Option from "./option";

function Questions({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} disaptch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
