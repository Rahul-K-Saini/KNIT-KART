import { useState } from 'react';
import { ChevronDown, ChevronUp } from'lucide-react';
import "../../custom.modules.css";
const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="border-b py-4 cursor-pointer">
      <div className="flex items-center justify-between" onClick={toggleAnswer}>
        <a className="font-medium">{question}</a>
        <button className="mr-6">
        {showAnswer ? <ChevronUp />:<ChevronDown />}
        </button>
      </div>
      <p
        className="pr-10"
        style={{
          maxHeight: showAnswer ? "100px" : "0",
          opacity: showAnswer ? 1 : 0,
          transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
          overflow: "hidden",
        }}
      >
        {answer}
      </p>
    </div>
  );
};

export default Question;
