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
        <Toaster />
        <div style={{ display: 'flex' }}>
          <form onSubmit={onSubmit}>
            <textarea
              ref={textSpace}
              name=""
              id=""
              cols="50"
              rows="20"
              onChange={handleChange}
            ></textarea>
            <input type="submit" value="translate" />
          </form>
          <div style={{ border: '1px solid', width: 500 }}>
            {translations.map((item, index) => (
              <p key={index}>
                {item.lang}: {item.result}
              </p>
            ))}
          </div>
        </div>
        <div>
          {userHistory.map((item) => {
            return (
              <p key={item._id} onClick={handleTranslationClick}>
                {item.text}
              </p>
            );
          })}
        </div>
      </>)
      }

    </>
  );
};

export default Home;
