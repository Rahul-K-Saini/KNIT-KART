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

export default Question;