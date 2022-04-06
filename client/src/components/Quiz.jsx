import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getQuizData,
  increaseIndex,
  setScore,
} from '../redux/actions/quizActions';

const Quiz = () => {
  const [className, setClassName] = useState('answerSpan');
  const state = useSelector((state) => state.quizReducer);
  const { quizData, score, questionIndex } = state;
  const dispatch = useDispatch();

  const handleFetchQuiz = () => dispatch(getQuizData());

  useEffect(() => {
    handleFetchQuiz();
  }, []);

  const handleClick = (item, e) => {
    dispatch(setScore(item));
    e.target.classList.add(item.isCorrect ? 'correct' : 'notCorrect');
    setTimeout(() => {
      e.target.className = className;
      dispatch(increaseIndex());
    }, 1000);
  };

  return (
    <div>
      {questionIndex > 9 ? (
        <h1>Finished</h1>
      ) : (
        <>
          {' '}
          <p
            style={{ border: '1px solid black', marginBottom: 30, padding: 10 }}
          >
            Question:find the right translation of the following{' '}
            <strong>{quizData[questionIndex].text}</strong>
          </p>
          <div>
            {quizData[questionIndex].answers.map((item, ind) => {
              return (
                <span
                  className={className}
                  onClick={(e) => handleClick(item, e)}
                  key={ind}
                >
                  {item.option}
                </span>
              );
            })}

            <span>{score}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
