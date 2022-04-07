import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languageConvert } from '../helpers/quizHelpers';
import { getQuizData } from '../redux/actions/quizActions';
import OptionCard from './OptionCard';

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
    <div>
      {questionIndex > 9 ? (
        <h1>Finished</h1>
      ) : (
        <>
          <p
            style={{ border: '1px solid black', marginBottom: 30, padding: 10 }}
          >
            <strong>Question:</strong>find the right translation of the
            following word <strong>{quizData[questionIndex].text}</strong>
          </p>

          <div>
            {quizData[questionIndex].answers.map((item, ind) => {
              return <OptionCard item={item} key={ind} />;
            })}
          </div>

          <h1>{score}</h1>

          {showCorrect && (
            <p>
              Correct! <strong>{optionObj.option}</strong> means{' '}
              {quizData[questionIndex].text} in{' '}
              <strong>{languageConvert(optionObj.optionLang)}</strong>
            </p>
          )}

          {showFalse && (
            <p>
              Missed! <strong>{optionObj.option}</strong> means{' '}
              <strong>{optionObj.text}</strong> in{' '}
              <strong>{languageConvert(optionObj.optionLang)}</strong>
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
