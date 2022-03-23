import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getUserCreds, discardLanguage, addLanguage, updUsernameAndEmail } from '../redux/actions/accountAction';
import { sendNewCreds } from '../redux/actions/userActions';


const AccountSettings = () => {
  const dispatch = useDispatch();
  const { user, restLangs } = useSelector(state => state.accountReducer);
  const fetchUser = () => {
    dispatch(getUserCreds())
  }
  useEffect(() => {
    fetchUser()

  }, [])

  const [isDisabled, setIsDisabled] = useState({ usernameInput: true, emailInput: true, passwordInput: false }
  )

  const handleOnChange = (e) => {
    dispatch(updUsernameAndEmail({ [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendNewCreds(user))
  }

  return <>
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="">username<input onChange={handleOnChange} type="text" name="username" id="username" disabled={isDisabled.usernameInput}
          value={user.username}
        /></label>
        <input onClick={() => setIsDisabled({ ...isDisabled, usernameInput: !isDisabled.usernameInput })} type="button" value="Edit" />
      </div>

      <div>
        <label htmlFor="">email<input onChange={handleOnChange} disabled={isDisabled.emailInput} type="text" name="email" id="email"
          value={user.email}
        /></label>
        <input onClick={() => setIsDisabled({ ...isDisabled, emailInput: !isDisabled.emailInput })} type="button" value="edit" />
      </div>

      <p onClick={() => setIsDisabled({ ...isDisabled, passwordInput: !isDisabled.passwordInput })}>change password</p>

      {isDisabled.passwordInput && <div>
        <label htmlFor="">old password <input onChange={handleOnChange} type="text" name="password" id="password" /></label>
        <label htmlFor="">new password <input onChange={handleOnChange} type="text" name="newPassword" id="newPassword" /></label>
      </div>}

      <div>
        {user.languages.map((item, index) => {
          return (
            <span key={index} onClick={() => dispatch(discardLanguage(index))} style={{ border: '1px solid red', margin: 10 }}>{item}</span>
          )
        })}
      </div>
      <div>{restLangs.map((elem, index) => <span key={index} onClick={() => dispatch(addLanguage(index))} style={{ border: '1px solid red', margin: 10 }}>{elem}</span>)}</div>
      <input type="submit" value="Save" />
    </form>
  </>;
};

export default AccountSettings;
