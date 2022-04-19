import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languageConvert } from '../helpers/quizHelpers';
import { getQuizData } from '../redux/actions/quizActions';
import OptionCard from './OptionCard';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const state = useSelector((state) => state.quizReducer);
  const { quizData, score, questionIndex, optionInfo } = state;
  const { showCorrect, showFalse, optionObj } = optionInfo;
  const dispatch = useDispatch();

  const handleFetchQuiz = () => dispatch(getQuizData());

  useEffect(() => {
    handleFetchQuiz();
  }, []);
  return (
    <div className="quizContainer">
      {questionIndex > 9 ? (
        <>
          <h1 className="quizContainer__header">
            Your final score is {score} out of 10
          </h1>
          <Link className="quizContainer__link" to="/home">
            Return Home
          </Link>
        </>
      ) : (
        <div className="quizContainer__quiz">
          <h1 className="quizContainer__header">Test your skills</h1>
          <p className="quizContainer__text">
            Question: find the right translation for the following word:{' '}
            <strong>{quizData[questionIndex].text}</strong>
          </p>

          <div className="quizContainer__answers">
            {quizData[questionIndex].answers.map((item, ind) => {
              return <OptionCard item={item} key={ind} />;
            })}
            <h3 className="quizContainer__score">Your score:</h3>
            <h3> {score}</h3>
          </div>

          {showCorrect && (
            <p className="quizContainer__text">
              Correct! <strong>{optionObj.option}</strong> means{' '}
              <strong> {quizData[questionIndex].text}</strong> in{' '}
              {languageConvert(optionObj.optionLang)}
            </p>
          )}

          {showFalse && (
            <p className="quizContainer__text">
              Missed! <strong>{optionObj.option}</strong> means{' '}
              <strong>{optionObj.text}</strong> in{' '}
              {languageConvert(optionObj.optionLang)}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
