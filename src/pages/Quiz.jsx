import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function Quiz() {
  const { slug } = useParams(); // e.g. 'ratio-analysis'
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('topic_slug', slug); // assuming you store slug in DB

      if (error) console.error(error);
      else setQuestions(data);
    };

    fetchQuestions();
  }, [slug]);

  const currentQuestion = questions[currentIndex];

  return (
  <div className="min-h-screen w-screen bg-white flex flex-col items-center justify-start py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-4 text-black">Quiz: {slug.replace('-', ' ')}</h1>

      {questions.length > 0 && (
        <div className="w-full max-w-2xl bg-gray-200 h-3 rounded-full mb-8">
          <div
            className="bg-indigo-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      )}

      {currentQuestion ? (
        <div className="w-full max-w-2xl bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">{currentQuestion.title}</h2>
          <h2 className="text-lg font-semibold mb-4 text-center text-black">{currentQuestion.question}</h2>
          <div className="space-y-3 mb-6">
            {['a', 'b', 'c', 'd'].map((key) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedOption(key);
                  setShowExplanation(true);
                }}
                className="block w-full bg-black text-white hover:bg-gray-800 p-3 rounded"
              >
                {currentQuestion[`option_${key}`]}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="mt-4 bg-gray-100 p-4 rounded shadow-inner text-center">
              {selectedOption === currentQuestion.correct_option ? (
                <p className="text-green-700 font-semibold mb-2">✅ Correct!</p>
              ) : (
                <p className="text-red-600 font-semibold mb-2">❌ Incorrect</p>
              )}
              <p className="text-black text-sm">{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            <button
              onClick={() => {
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
                setSelectedOption(null);
                setShowExplanation(false);
              }}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded ${
                currentIndex === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-indigo-500 text-white hover:bg-indigo-600'
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => {
                setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));
                setSelectedOption(null);
                setShowExplanation(false);
              }}
              disabled={currentIndex === questions.length - 1}
              className={`px-4 py-2 rounded ${
                currentIndex === questions.length - 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-indigo-500 text-white hover:bg-indigo-600'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}

export default Quiz;