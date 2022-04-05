import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRandom } from '../helpers/quizHelpers';
import { getQuizData } from '../redux/actions/quizActions';

const Quiz = () => {
  const state = useSelector(state => state.quizReducer)
  const { quizData } = state;
  const dispatch = useDispatch();

  const handleFetchQuiz = () => dispatch(getQuizData())

  useEffect(() => {
    handleFetchQuiz();

  }, [])

  // in redux create variables like score and index, with every click to the options , we'll check the isCorrect true/false and update the score, and also increase the index so goes to the next question.





  return <div>
    <p style={{ border: '1px solid black', marginBottom: 30, padding: 10 }}>Question:find the right translation of the following <strong>{quizData[0].text}</strong></p>
    <div>
      {quizData[0].answers.map((item, ind) => {
        return (
          <span key={ind} style={{ border: '1px solid red', margin: 20, padding: 20 }}>{item.option}</span>
        )
      })}

    </div>
  </div>;
};

export default Quiz;
