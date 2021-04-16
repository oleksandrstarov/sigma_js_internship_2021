import React, { useState } from 'react';

import { useHistory } from 'react-router';

const loupeIcon = '/images/search-icon.svg';

const SearchField = () => {

  const [inputValue, setInputValue] = useState<string>('');

  const history = useHistory();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (inputValue.trim()) {
      history.push(`/search-results/${inputValue}/1`);
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
