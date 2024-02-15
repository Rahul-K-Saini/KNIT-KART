import React, { useState } from "react";
import Question from "./Question";
import questions from "./questions";
import "../../custom.modules.css";
const Faq = () => {
  return (
    <div
      id="FAQs"
      className="md:p-20 px-4 py-12  flex flex-col justify-center items-center backgroundColor textColor"
    >
      <h1 className="text-3xl font-medium mb-6">Common Queries</h1>
      <p className="mb-8">Where Your Questions Meet Solutions</p>
      <div className="flex flex-col text-left w-full space-y-5">
        {questions.map((ques) => (
          <Question key={ques.id} {...ques} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
