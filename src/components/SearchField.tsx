import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import '../styles/SearchField.scss';

const loupeIcon = '/images/search-icon.svg';

const genres = [
  'Comedy',
  'Drama',
  'Romance',
  'Mystery',
  'Thriller',
  'Animation',
  'Action',
  'Adventure',
  'Crime',
  'Fantasy',
  'Science Fiction',
  'Thriller',
  'Horror',
  'Family'
];

const SearchField: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);

  const [date, setDate] = useState<{ fromDate: string; toDate: string }>({
    fromDate: '1980',
    toDate: '2021'
  });

  const history = useHistory();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const submitHandler = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();

      if (inputValue.trim()) {
        history.push(`/search-results/${inputValue}`);
      }
    },
    [inputValue, history]
  );

  const focusHandler = useCallback((event: React.SyntheticEvent) => {
    setFocus(true);
  }, []);

  const blurHandler = (event: React.SyntheticEvent) => {
    setFocus(false);
  };

  const mouseEnterHandler = (event: React.SyntheticEvent) => {
    setDropdown(true);
  };

  const mouseLeaveHandler = (event: React.SyntheticEvent) => {
    setDropdown(false);
  };

  const fromDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate({ ...date, fromDate: event.target.value });
  };

  const toDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate({ ...date, toDate: event.target.value });
  };

  return (
    <>
      <form onSubmit={submitHandler} className="search-form">
        <input
          onBlur={blurHandler}
          value={inputValue}
          onChange={changeHandler}
          id="search"
          type="search"
          placeholder="Search"
          className="header-search"
          onFocus={focusHandler}
          autoComplete="off"
        />
        {(focus || dropdown) && (
          <div
            className="drop-down-filter"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}>
            <div className="dropdown-wrapper">
              <div className="date-select-wrapper">
                <span>
                  <button>-</button>
                  <input
                    type="number"
                    onChange={fromDateHandler}
                    min="1980"
                    value={date.fromDate}
                    max={date.toDate}
                  />
                  <button>+</button>
                </span>
                <span>
                  <button>-</button>
                  <input
                    min={date.fromDate}
                    type="number"
                    onChange={toDateHandler}
                    value={date.toDate}
                  />
                  <button>+</button>
                </span>
              </div>
              <label htmlFor="favorite" className="filter-item">
                <span>Favorite</span>
                <input
                  id="favorite"
                  type="checkbox"
                  className="custom-checkbox"
                />
              </label>
              <label htmlFor="history" className="filter-item">
                <span>History</span>
                <input
                  id="history"
                  type="checkbox"
                  className="custom-checkbox"
                />
              </label>
              <select className="custom-select">
                {genres.map(genre => (
                  <option>{genre}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        <button className="button-submit" type="submit">
          <img src={loupeIcon} alt="search-icon" />
        </button>
      </form>
    </>
  );
};
export default SearchField;
