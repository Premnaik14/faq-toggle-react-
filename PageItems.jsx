import Page from "./Page";

const questions = [
  { question: "What is the question?", answer: "This is the answer." },
  { question: "What is the question?", answer: "This is the answer." }
];

const PageItems = () => {
  return (
    <div className="list">
      {questions.map((faq, index) => (
        <Page key={index} {...faq} />
      ))}
    </div>
  );
};

export default PageItems;
