import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeOptionInfo,
  increaseIndex,
  setScore,
  showOptionInfoCorrect,
  showOptionInfoFalse,
  changeClickableTrue,
  changeClickableFalse,
} from '../redux/actions/quizActions';

const OptionCard = ({ item }) => {
  const dispatch = useDispatch();
  const [answerFalse, setAnswerFalse] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const state = useSelector((state) => state.quizReducer);

  const handleClick = (item) => {
    dispatch(changeClickableFalse());
    dispatch(setScore(item));

    if (item.isCorrect) {
      dispatch(showOptionInfoCorrect(item));
      setAnswerCorrect(true);
    } else {
      dispatch(showOptionInfoFalse(item));
      setAnswerFalse(true);
    }

    setTimeout(() => {
      if (item.isCorrect) {
        setAnswerCorrect(false);
      } else {
        setAnswerFalse(false);
      }

      dispatch(closeOptionInfo());
      dispatch(changeClickableTrue());
      dispatch(increaseIndex());
    }, 3000);
  };

  return (
    <>
      <span
        className={`quizContainer__answer ${answerCorrect ? 'correct' : ''} ${
          answerFalse ? 'notCorrect' : ''
        }`}
        onClick={
          state.clickable
            ? () => {
                handleClick(item);
              }
            : null
        }
      >
        {item.option}
      </span>
    </>
  );
};

export default OptionCard;
