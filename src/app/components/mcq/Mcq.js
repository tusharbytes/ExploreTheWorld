 
import React, { useState } from 'react';

const Mcq = () => {
    const [step, setStep] = useState(0)
    const [selectedAns, setSelectedAns] = useState([])
    const [totelNumber, setTotelNumber] = useState(null)

    const [showResult, setShowResult] = useState(false)
    const mcq = {
        questions: [
            {
                question: "What is the correct way to declare a JavaScript variable?",
                options: ["var myVar;", "let myVar;", "const myVar;", "All of the above"],
                answer: "All of the above",
            },
            {
                question: "Which of the following is NOT a JavaScript data type?",
                options: ["Number", "String", "Character", "Boolean"],
                answer: "Character",
            },
            {
                question: "How do you write a comment in JavaScript?",
                options: [
                    "// This is a comment",
                    "/* This is a comment */",
                    "Both A and B",
                    "# This is a comment",
                ],
                answer: "Both A and B",
            },
            {
                question: "Which function is used to parse a JSON string in JavaScript?",
                options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.decode()"],
                answer: "JSON.parse()",
            },
            {
                question: "Which keyword is used to define an asynchronous function in JavaScript?",
                options: ["async", "await", "setTimeout", "promise"],
                answer: "async",
            },
            {
                question: "What does `typeof null` return in JavaScript?",
                options: ["'null'", "'object'", "'undefined'", "'boolean'"],
                answer: "'object'",
            },
            {
                question: "Which of the following is a falsy value in JavaScript?",
                options: ["0", "''", "null", "All of the above"],
                answer: "All of the above",
            },
            {
                question: "Which operator is used to compare both value and type?",
                options: ["==", "===", "!=", "!=="],
                answer: "===",
            },
            {
                question: "How do you create a function in JavaScript?",
                options: [
                    "function myFunction()",
                    "let myFunction = function()",
                    "const myFunction = () => {}",
                    "All of the above"
                ],
                answer: "All of the above",
            },
            {
                question: "Which method is used to convert an array to a string?",
                options: ["join()", "split()", "toString()", "Both join() and toString()"],
                answer: "Both join() and toString()",
            }
        ]
    }

    const pageQuestion = 1

    const handleNext = () => {
        setStep(step + pageQuestion, mcq.length);
    };
    const handleBack = () => {
        setStep(step - pageQuestion, mcq.length);
    };
    const handleAnswers = (option) => {
        setSelectedAns((prev) => ({
            ...prev,
            [step]: option,
        }));
    };

    const handleSubmit = () => {
        // console.log(selectedAns)

        let num = 0

        mcq?.questions.forEach((question, index) => {
            if (selectedAns[index] === question.answer) {
                num++;
            }

        });

        const check = (num / mcq?.questions?.length) * 100

        setTotelNumber(check)
        setShowResult(true)
        console.log(num)



    }

    return (
        <div className="min-h-screen bg-gray-100 justify-center p-6 flex flex-col items-center">
            {!showResult ?
                <div className='text-center'>
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">
                        JavaScript MCQs
                    </h1>
                    <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
                        {mcq.questions.slice(step, step + pageQuestion).map((ques, index) => (
                            <div key={index} className="mb-6 border-b pb-4 last:border-none">
                                <p className="text-lg font-semibold text-gray-900">{step + 1}. {ques.question}</p>
                                <div className='space-y-2'>   {ques.options.map((option, idx) => (
                                    <button

                                        onClick={() => handleAnswers(option,)} key={idx}
                                        className={`p-2 text-left bg-gray-200 w-full rounded-md cursor-pointer hover:bg-gray-300 transition
                            ${selectedAns[step] === option ? "bg-green-500" : ""}`}>
                                        {option}
                                    </button>
                                ))}
                                </div>
                            </div>
                        ))}
                        <div className='flex justify-between gap-2'>
                            {step > 0 && <button className='px-2 py-4 text-white bg-amber-300  hover:bg-amber-500 cursor-pointer rounded-3xl w-full' onClick={() => handleBack()}> Back</button>}

                            {step < mcq.questions.length - 1 ? <button
                                disabled={!selectedAns[step]}
                                className={`px-2 py-4 text-white rounded-3xl w-full transition 
                              ${selectedAns[step]
                                        ? "bg-amber-300 hover:bg-amber-500 cursor-pointer"
                                        : "bg-gray-400 cursor-not-allowed"}`}
                                onClick={handleNext}
                            >
                                Next
                            </button> :
                                <button
                                    onClick={() => handleSubmit()}
                                    className={`px-2 py-4 text-white bg-red-600  hover:bg-red-800 cursor-pointer rounded-3xl w-full transition 
                            `}
                                >
                                    Submit
                                </button>

                            }

                        </div>
                    </div>
                </div> :
                <div className="">
                    <div
                        className={`text-lg  text-center p-4 font-semibold    
                ${totelNumber <= 30
                                ? '  text-red-600'
                                : totelNumber <= 60
                                    ? '   text-yellow-600'
                                    : '    text-green-600'
                            }`}
                    >
                        {totelNumber <= 30
                            ? 'Failed'
                            : totelNumber <= 60
                                ? 'Good'
                                : 'Excellent'}
                    </div>
                    <div
                        className="flex items-center justify-center p-4 h-[150px] w-[150px] rounded-full   relative"
                        style={{
                            background: `conic-gradient(#10b981 ${totelNumber * 3.6}deg, #e5e7eb ${totelNumber * 3.6}deg)`
                        }}
                    >
                        <div className="absolute bg-white rounded-full h-[120px] w-[120px] flex items-center justify-center">
                            <h2 className="text-center text-lg font-bold">{totelNumber}%</h2>
                        </div>
                    </div>


                </div>
            }
        </div>
    );
};

export default Mcq;
