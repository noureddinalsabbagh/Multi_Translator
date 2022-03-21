const creatCheckbox = (languageCode, labelText, onChange) => {
  return (
    <>
      <label className="registerForm__langLable" htmlFor={languageCode}>
        {labelText}{' '}
        <input
          className="registerForm__checkbox"
          type="checkbox"
          name={languageCode}
          id={languageCode}
          value={languageCode}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default creatCheckbox;
