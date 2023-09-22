
const ResultQuiz = ({ questions, score, correctAnswers, wrongAnswers }) => {
    return (
        <div className="w-full h-auto rounded-lg bg-white
            p-4 text-center flex flex-col items-start justify-center">
            <h3 className="py-3 font-bold text-gray-700 leading-6 text-lg">Result Quiz</h3>
            <div className="w-full p-3">
                <ul className="flex flex-col text-left justify-center items-start">
                    <li className="w-full py-2 text-sm font-semibold
                        text-gray-600">Overall : <span className="font-bold">{(score / 25) * 100} %</span></li>
                    <li className="w-full py-2 text-sm font-semibold
                        text-gray-600">Total Questions : <span className="text-green-500 font-bold">{questions.length}</span></li>
                    <li className="w-full py-2 text-sm font-semibold
                        text-gray-600">Total Score : <span className="text-gray-600 font-bold">{score}</span></li>
                    <li className="w-full py-2 text-sm font-semibold
                        text-gray-600">Correct Answer : <span className="text-green-500 font-bold">{correctAnswers}</span></li>
                    <li className="w-full py-2 text-sm font-semibold
                        text-gray-600">Wrong Answer : <span className="text-red-500 font-bold">{wrongAnswers}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default ResultQuiz