import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeOptionInfo, increaseIndex, setScore, showOptionInfoCorrect, showOptionInfoFalse } from '../redux/actions/quizActions';

const OptionCard = ({ item }) => {
  const dispatch = useDispatch();
  const [answerFalse, setAnswerFalse] = useState(false)
  const [answerCorrect, setAnswerCorrect] = useState(false)

  const handleClick = (item, e) => {
    dispatch(setScore(item));

    if (item.isCorrect) {
      dispatch(showOptionInfoCorrect(item))
      setAnswerCorrect(true)
    } else {
      dispatch(showOptionInfoFalse(item))
      setAnswerFalse(true)
    }

    setTimeout(() => {
      if (item.isCorrect) {
        setAnswerCorrect(false)
      } else {
        setAnswerFalse(false)
      }
      dispatch(closeOptionInfo())
      dispatch(increaseIndex());
    }, 3000);
  };

  return (
    <>
      <span
        className={`answerSpan ${answerCorrect ? "correct" : ""} ${answerFalse ? "notCorrect" : ""}`}
        onClick={(e) => handleClick(item, e)}
      >
        {
          item.option
        }
      </span>
    </>
  )
}

export default OptionCard