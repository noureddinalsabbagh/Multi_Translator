import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { verifyUser } from '../redux/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import SVG from '../images/undraw_completing_re_i7ap_verified.svg';

// animation imports
import { motion } from 'framer-motion';
import { fadeInVariants } from '../animation/formAnimations';

const Welcome = () => {
  const { code } = useParams();
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch(verifyUser(code));
  };

  useEffect(() => {
    handleDispatch();
  }, []);

  const state = useSelector((state) => state.userReducer);
  return (
    <motion.div
      className="welcomeContainer"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
    >
      <img src={SVG} alt="SVG_img_verified" className="welcomeContainer__img" />
      <h1 className="welcomeContainer__header">{state.message}</h1>
      <Link to={'/login'} className="welcomeContainer__link">
        Please Login
      </Link>
    </motion.div>
  );
};

export default Welcome;
