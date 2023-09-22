
const QuizItem = ({ question, answers, selectedAnswerIndex, selectedAnswerHandler }) => {
    return (
        <div className="w-full h-auto rounded-lg bg-white
            p-4 text-center flex flex-col items-center justify-center">
            <h3 className="py-3 font-semibold text-gray-700 leading-6 text-lg">{question}</h3>
            <div className="w-full p-3">
                <ul className="flex flex-col gap-3 text-center justify-center items-start">
                    {answers.map((answer, index) => (
                        <li key={index}
                            onClick={() => selectedAnswerHandler(answer, index)}
                            className={`${selectedAnswerIndex == index ? "bg-blue-500 text-white" : "hover:bg-white hover:text-gray-800 hover:ring-1"} bg-blue-50 w-full py-4 text-sm font-medium
                    text-gray-800 rounded-lg shadow-sm cursor-pointer transition-all `}>{answer}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default QuizItem