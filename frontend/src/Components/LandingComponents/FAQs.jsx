import React, { useState } from 'react';

const Faq = () => {
    const [answers, setAnswers] = useState({
        showAnswer1: false,
        showAnswer2: false,
        showAnswer3: false,
        showAnswer4: false,
        showAnswer5: false
    });

    const toggleAnswer = (answerKey) => {
        setAnswers(prevState => ({
            ...prevState,
            [answerKey]: !prevState[answerKey]
        }));
    };

    return (
        <div id='FAQs' className='md:p-20 px-4 py-14 flex flex-col justify-center items-center' style={{ backgroundColor: "#F4F4F4", color: "#333333" }}>
            <h1 className='text-3xl font-medium mb-6'>Common Queries</h1>
            <p className="mb-8">Where Your Questions Meet Solutions</p>
            <div className='flex flex-col text-left w-full space-y-5'>
                <Question
                    question="How does the platform work?"
                    answer="The platform allows hostelers to exchange their belongings with others by creating listings for the items they want to give away and browsing listings for items they need. Users can connect with each other, negotiate the terms of the exchange, and arrange for the exchange of items."
                    showAnswer={answers.showAnswer1}
                    toggleAnswer={() => toggleAnswer('showAnswer1')}
                />
                <Question
                    question="Is it free to use the platform?"
                    answer="Yes, the platform is completely free to use. There are no charges or fees for creating listings, connecting with other users, or making exchanges."
                    showAnswer={answers.showAnswer2}
                    toggleAnswer={() => toggleAnswer('showAnswer2')}
                />
                <Question
                    question="How can I ensure the safety of my belongings during an exchange?"
                    answer="While the platform provides a platform for users to connect and arrange exchanges, it is important to take necessary precautions to ensure the safety of your belongings. We recommend meeting in a public place, inspecting the items before finalizing the exchange, and communicating clearly with the other user to establish trust."
                    showAnswer={answers.showAnswer3}
                    toggleAnswer={() => toggleAnswer('showAnswer3')}
                />
                <Question
                    question="Can I exchange multiple items at once?"
                    answer="Yes, you can exchange multiple items at once. When negotiating with another user, you can discuss and agree upon the terms of the exchange, including the number of items involved."
                    showAnswer={answers.showAnswer4}
                    toggleAnswer={() => toggleAnswer('showAnswer4')}
                />
                <Question
                    question="What if I can't find the item I need on the platform?"
                    answer="If you can't find the item you need on the platform, you can create a listing specifying your requirements. Other users who have the item may reach out to you if they are interested in exchanging it with you."
                    showAnswer={answers.showAnswer5}
                    toggleAnswer={() => toggleAnswer('showAnswer5')}
                />
            </div>
        </div>
    );
};

const Question = ({ question, answer, showAnswer, toggleAnswer }) => {
    return (
        <div className='border-b py-4 cursor-pointer' onClick={toggleAnswer}>
            <div className='flex items-center justify-between'><a className='font-medium'>{question}</a>
                <button className='mr-6 transition-all duration-300'>
                    <h3 className='text-2xl font-medium'>{showAnswer ? "-" : "+"}</h3>
                </button></div>
            <p className='pr-10' style={{
                maxHeight: showAnswer ? "1000px" : "0",
                opacity: showAnswer ? 1 : 0,
                transition: "max-height 0.3s, opacity 0.15s",
            }}>
                {answer}
            </p>
        </div>
    );
};

export default Faq;
