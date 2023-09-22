import Layout from "@/components/Layout"
import QuizItem from "@/components/QuizItem"
import { useState } from "react"

import { quizData } from "../data/quizData"
import ResultQuiz from "@/components/ResultQuiz"

const QuizPage = () => {

    const [currQuestion, setCurrQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [checked, setChecked] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    });


    const { questions, totalQuestions } = quizData;
    const { question, answers, correctAnswer } = questions[currQuestion];

    // Choose and check the answer
    const selectedAnswerHandler = (answer, index) => {
        setChecked(true);
        setSelectedAnswerIndex(index);
        if (answer === correctAnswer) {
            setSelectedAnswer(true);
        } else {
            setSelectedAnswer(false);
        }
    }

    // Calculate scores and progress questions
    const nextQuestionHandler = () => {
        setSelectedAnswerIndex(null);

        if (selectedAnswer) {
            setResult({
                ...result,
                score: result.score + 5,
                correctAnswers: result.correctAnswers + 1
            });
        } else {
            setResult({
                ...result,
                wrongAnswers: result.wrongAnswers + 1
            });
        }

        if (currQuestion !== questions.length - 1) {
            setCurrQuestion(currQuestion + 1);
        } else {
            setCurrQuestion(0);
            setShowResult(true);
        }
        setChecked(false);
    }

    return (
        <Layout>
            <div className="w-11/12 sm:max-w-lg h-auto
            p-4 flex flex-col items-center">
                <div className="w-full flex items-center justify-between p-2">
                    <h2 className="text-lg font-bold text-blue-600">Quiz Page</h2>
                    <div className="text-sm">
                        <span className="font-medium text-slate-800 tracking-widest">{currQuestion + 1}/{totalQuestions}</span>
                    </div>
                </div>
                {!showResult ? (
                    <>
                        <QuizItem
                            question={question}
                            answers={answers}
                            correctAnswer={correctAnswer}
                            selectedAnswerHandler={selectedAnswerHandler}
                            selectedAnswerIndex={selectedAnswerIndex}
                        />
                        <button disabled={checked ? false : true} onClick={nextQuestionHandler} className="w-full outline-none text-sm mt-5 rounded-lg ring-1 text-white bg-blue-500 py-3 font-semibold 
                    transition-all hover:bg-white hover:text-blue-500 disabled:opacity-60 disabled:hover:bg-blue-500 disabled:text-white
                    ">{currQuestion === questions.length - 1 ? "Finish" : "Next"}</button>
                    </>
                ) : (
                    <>
                        <ResultQuiz {...result} questions={questions} />
                        <button onClick={() => window.location.reload()} className="w-full outline-none text-center text-sm mt-5 rounded-lg ring-1 text-white bg-blue-500 py-3 font-semibold 
                    transition-all hover:bg-white hover:text-blue-500
                    ">
                            Restart Quiz
                        </button>
                    </>
                )}
            </div>
        </Layout>
    )
}

export default QuizPage