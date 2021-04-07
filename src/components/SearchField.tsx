import React, { useState } from 'react';

const loupeIcon = '/images/search-icon.svg';

const SearchField: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (inputValue.trim()) {
      console.log(inputValue);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className="search-form">
        <input
          value={inputValue}
          onChange={changeHandler}
          id="search"
          type="search"
          placeholder="Search"
          className="header-search"
        />

        <button type="submit">
          <img src={loupeIcon} alt="search-icon" />
        </button>
      </form>
    </>
  );
};
export default SearchField;
