import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { translate, translateHistory } from '../redux/actions/homeActions';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const state = useSelector((state) => state.homeReducer);
  const user = useSelector((state) => state.userReducer);
  const { message } = user
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
    // if (message) toast.success(message);
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
      {isLoading ? ("loading") : (<>

        <div className="homeContainer">
          <div className="searchAndResults" >
            <form className="searchForm" onSubmit={onSubmit}>
              <textarea className="searchForm__textarea"
                ref={textSpace}
                name=""
                id=""
                // cols="50"
                // rows="20"
                onChange={handleChange}
              ></textarea>
              <input className="searchForm__translateBtn" type="submit" value="translate" />
            </form>
            <div className="resultsContainer" >
              {translations.map((item, index) => (
                <p className="resultsContainer__result" key={index}>
                  <strong>{item.lang}</strong>: {item.result}
                </p>
              ))}
            </div>
          </div>
          <div className="searchedWordsContainer">
            <h4 className="searchedWordsContainer__heading">previous searches...</h4>
            {userHistory.map((item) => {
              return (
                <p className="searchedWordsContainer__word" key={item._id} onClick={handleTranslationClick}>
                  {item.text}
                </p>
              );
            })}
          </div>
        </div>
      </>)
      }

    </>
  );
};

export default Home;
