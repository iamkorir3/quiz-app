import Option from "./option";

function Questions({ question, dispatch, answer }) {
  function test() {
    console.log("reached");
  }
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
