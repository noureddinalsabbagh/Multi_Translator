import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { translate, translateHistory } from '../redux/actions/homeActions';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { inputLeftVariants, inputRightVariants, slidDown, slideUpVariants } from '../animation/animationVarients';


const Home = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const state = useSelector((state) => state.homeReducer);
  const { userHistory, translations, isLoading } = state;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDispatch = () => {
    dispatch(translate({ text }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    handleDispatch();
  };
  const handleHistory = () => {
    dispatch(translateHistory());
  };
  useEffect(() => {
    handleHistory();

  }, [translations]);

  // translate history words on click
  const textSpace = useRef();
  const handleTranslationClick = (e) => {
    const text = (textSpace.current.value = e.target.innerText);
    setText(text)
    dispatch(translate({ text }));
  };

  return (
    <>
      <div className="homeContainer">
        <div className="searchAndResults" >
          <form className="searchForm" onSubmit={onSubmit} >
            <motion.textarea className="searchForm__textarea"
              ref={textSpace}
              name=""
              id=""
              // cols="50"
              // rows="20"
              onChange={handleChange}

              variants={inputLeftVariants}
              animate="visible"
              initial="hidden"></motion.textarea>
            <motion.input className="searchForm__translateBtn" type="submit" value="translate" variants={slidDown}
              animate="visible"
              initial="hidden" />
          </form>
          <motion.div className="resultsContainer"
            variants={inputRightVariants}
            animate="visible"
            initial="hidden"
          >
            {text.length > 0 && (isLoading ? "loading..." : (translations.map((item, index) => (
              <p className="resultsContainer__result" key={index}>
                <strong>{item.lang}</strong>: {item.result}
              </p>
            ))))}
          </motion.div>
        </div>
        <motion.div className="searchedWordsContainer" variants={slideUpVariants}
          animate="visible"
          initial="hidden">
          <h4 className="searchedWordsContainer__heading">previous searches...</h4>
          {userHistory.map((item) => {
            return (
              <p className="searchedWordsContainer__word" key={item._id} onClick={handleTranslationClick}>
                {item.text}
              </p>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Home;
