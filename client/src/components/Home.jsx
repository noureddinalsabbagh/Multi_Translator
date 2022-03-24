import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { translate } from '../redux/actions/homeActions';
import { useSelector } from 'react-redux';

const Home = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state.homeReducer);

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
  return (
    <>
      <div style={{ display: 'flex' }}>
        <form onSubmit={onSubmit}>
          <textarea
            name=""
            id=""
            cols="50"
            rows="20"
            onChange={handleChange}
          ></textarea>
          <input type="submit" value="translate" />
        </form>
        <div style={{ border: '1px solid', width: 500 }}>
          {state.translations.map((item, index) => (
            <p key={index}>
              {item.lang}: {item.result}
            </p>
          ))}
        </div>
      </div>
      <div>history</div>
    </>
  );
};

export default Home;
