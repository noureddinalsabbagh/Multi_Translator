import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserCreds,
  discardLanguage,
  addLanguage,
  updUsernameAndEmail,
} from '../redux/actions/accountAction';
import { sendNewCreds } from '../redux/actions/userActions';
import SVG from '../images/AccountSettings.svg';

//Animation Imports
import { motion } from 'framer-motion';

import {
  fadeInVariants,
  inputLeftVariants,
  inputRightVariants,
  slideUpVariants,
  scaleFrames,
} from '../animation/animationVarients';

const AccountSettings = () => {
  const dispatch = useDispatch();

  const { user, restLangs } = useSelector((state) => state.accountReducer);

  const fetchUser = () => {
    dispatch(getUserCreds());
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const [isDisabled, setIsDisabled] = useState({
    usernameInput: true,
    emailInput: true,
    passwordInput: false,
  });

  const handleOnChange = (e) => {
    dispatch(updUsernameAndEmail({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendNewCreds(user));
  };

  return (
    <div className="settingsContainer">
      <motion.img
        src={SVG}
        alt="account settings SVG"
        className="settingsImg"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      />

      <form className="settingsForm" onSubmit={handleSubmit}>
        <motion.label
          htmlFor="username"
          className="settingsForm__label"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          Username
        </motion.label>

        <div>
          <motion.input
            className="settingsForm__input"
            onChange={handleOnChange}
            type="text"
            name="username"
            id="username"
            disabled={isDisabled.usernameInput}
            value={user.username}
            variants={inputLeftVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.input
            className="settingsForm__button"
            onClick={() =>
              setIsDisabled({
                ...isDisabled,
                usernameInput: !isDisabled.usernameInput,
              })
            }
            type="button"
            value="Edit"
            variants={inputRightVariants}
            initial="hidden"
            animate="visible"
          />
        </div>

        <motion.label
          htmlFor="email"
          className="settingsForm__label"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          Email
        </motion.label>
        <div>
          <motion.input
            className="settingsForm__input"
            onChange={handleOnChange}
            disabled={isDisabled.emailInput}
            type="email"
            name="email"
            id="email"
            value={user.email}
            variants={inputLeftVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.input
            className="settingsForm__button"
            onClick={() =>
              setIsDisabled({
                ...isDisabled,
                emailInput: !isDisabled.emailInput,
              })
            }
            type="button"
            value="Edit"
            variants={inputRightVariants}
            initial="hidden"
            animate="visible"
          />
        </div>

        <motion.p
          className="settingsForm__text"
          onClick={() => {
            setIsDisabled({
              ...isDisabled,
              passwordInput: !isDisabled.passwordInput,
            });
            dispatch(updUsernameAndEmail({ password: "", newPassword: "" }))
          }
          }
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          Change password:
        </motion.p>

        {isDisabled.passwordInput && (
          <>
            <motion.label
              htmlFor="oldPass"
              className="settingsForm__label"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
            >
              old password{' '}
            </motion.label>
            <motion.input
              className="settingsForm__input settingsForm__input--pass"
              onChange={handleOnChange}
              type="password"
              name="password"
              id="password"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.label
              htmlFor="newPass"
              className="settingsForm__label"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
            >
              new password{' '}
            </motion.label>
            <motion.input
              className="settingsForm__input settingsForm__input--pass"
              onChange={handleOnChange}
              type="password"
              name="newPassword"
              id="newPassword"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
            />
          </>
        )}
        <motion.p
          className="settingsForm__text"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          Your languages:{' '}
        </motion.p>
        <motion.div
          className="settingsForm__langsDiv"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          {user.languages.map((item, index) => {
            return (
              <motion.span
                className="settingsForm__span"
                key={index}
                onClick={() => dispatch(discardLanguage(index))}
                variants={scaleFrames}
                whileHover="hover"
              >
                {item}
              </motion.span>
            );
          })}
        </motion.div>
        <motion.p
          className="settingsForm__text"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          Other available languages:{' '}
        </motion.p>
        <motion.div
          className="settingsForm__langsDiv"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          {restLangs.map((elem, index) => (
            <motion.span
              className="settingsForm__span"
              key={index}
              onClick={() => dispatch(addLanguage(index))}
              variants={scaleFrames}
              whileHover="hover"
            >
              {elem}
            </motion.span>
          ))}
        </motion.div>
        <motion.input
          type="submit"
          value="Save"
          className="settingsForm__button settingsForm__button--save"
          variants={slideUpVariants}
          initial="hidden"
          animate="visible"
        />
      </form>
    </div>
  );
};

export default AccountSettings;
