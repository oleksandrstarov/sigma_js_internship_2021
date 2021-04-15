import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import '../styles/SearchField.scss';

const loupeIcon = '/images/search-icon.svg';

const genres = [
  'none',
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
  'Horror',
  'Family'
];

const checkedImg = '/images/searchFieldIcons/checked.svg';
const uncheckedImg = '/images/searchFieldIcons/unchecked.svg';

const SearchField: React.FC = () => {
  const history = useHistory();

  const [inputValue, setInputValue] = useState<string>('');

  const [focus, setFocus] = useState<boolean>(false);

  const [dropdown, setDropdown] = useState<boolean>(false);

  const [dateRange, setDateRange] = useState<{
    fromDate: number;
    toDate: number;
  }>({
    fromDate: 1980,
    toDate: 2021
  });

  const [checkboxes, setCheckboxes] = useState<{
    favorites: boolean;
    history: boolean;
  }>({
    favorites: false,
    history: false
  });

  const [genreToSearch, setGenreToSearch] = useState<string>('none');

  const searchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const submitSearchRequest = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();

      // for proper using of query params need to refactor routing
      if (inputValue.trim()) {
        history.push(
          `/search-results/title=${inputValue}?genre=${genreToSearch}?fromDate=${dateRange.fromDate}?toDate=${dateRange.toDate}?favorites=${checkboxes.favorites}?history=${checkboxes.history}`
        );
      }
    },
    [inputValue, history, checkboxes, genreToSearch, dateRange]
  );

  const onFocusSearchInput = useCallback(
    (event: React.SyntheticEvent): void => {
      setFocus(true);
    },
    []
  );

  const onBlurSearchInput = useCallback((event: React.SyntheticEvent): void => {
    setFocus(false);
  }, []);

  const mouseEnterDropdown = useCallback(
    (event: React.SyntheticEvent): void => {
      setDropdown(true);
    },
    []
  );

  const mouseLeaveDropdown = useCallback(
    (event: React.SyntheticEvent): void => {
      setDropdown(false);
    },
    []
  );

  const fromDateInputIncrease = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      if (dateRange.fromDate >= dateRange.toDate) return;
      setDateRange({ ...dateRange, fromDate: dateRange.fromDate + 1 });
    },
    [dateRange]
  );

  const fromDateInputDecrease = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      if (dateRange.fromDate <= 1980) return;
      setDateRange({ ...dateRange, fromDate: dateRange.fromDate - 1 });
    },
    [dateRange]
  );

  const toDateInputIncrease = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      if (dateRange.toDate >= 2022) return;
      setDateRange({ ...dateRange, toDate: dateRange.toDate + 1 });
    },
    [dateRange]
  );

  const toDateInputDecrease = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      if (dateRange.toDate <= dateRange.fromDate) return;
      setDateRange({ ...dateRange, toDate: dateRange.toDate - 1 });
    },
    [dateRange]
  );

  const favoritesCheckboxHandler = useCallback(
    (event: React.InputHTMLAttributes<HTMLInputElement>): void => {
      setCheckboxes({ ...checkboxes, favorites: !checkboxes.favorites });
    },
    [checkboxes]
  );

  const historyCheckboxHandler = useCallback(
    (event: React.InputHTMLAttributes<HTMLInputElement>): void => {
      setCheckboxes({ ...checkboxes, history: !checkboxes.history });
    },
    [checkboxes]
  );

  const selectGenreHandler = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>): void => {
      setGenreToSearch(event.target.value);
    },
    []
  );

  return (
    <>
      <form onSubmit={submitSearchRequest} className="search-form">
        <input
          onBlur={onBlurSearchInput}
          value={inputValue}
          onChange={searchInputChange}
          id="search"
          type="search"
          placeholder="Search"
          className="header-search"
          onFocus={onFocusSearchInput}
          autoComplete="off"
        />
        {(focus || dropdown) && (
          <div
            className="dropdown-filter"
            onMouseEnter={mouseEnterDropdown}
            onMouseLeave={mouseLeaveDropdown}>
            <div className="dropdown-wrapper">
              <div className="date-select-wrapper">
                <span>
                  <button onClick={fromDateInputDecrease}>-</button>
                  <input
                    type="number"
                    min="1980"
                    value={dateRange.fromDate}
                    readOnly
                  />
                  <button onClick={fromDateInputIncrease}>+</button>
                </span>
                <span>
                  <button onClick={toDateInputDecrease}>-</button>
                  <input type="number" value={dateRange.toDate} readOnly />
                  <button onClick={toDateInputIncrease}>+</button>
                </span>
              </div>
              <label
                className={`dropdown-item ${
                  checkboxes.favorites ? 'active-checkbox' : ''
                }`}>
                <input
                  onChange={favoritesCheckboxHandler}
                  type="checkbox"
                  className="custom-checkbox"
                  checked={checkboxes.favorites}
                />
                <span>Favorite</span>
                <img
                  className="check-img"
                  src={checkboxes.favorites ? checkedImg : uncheckedImg}
                  alt=""
                />
              </label>
              <label
                className={`dropdown-item ${
                  checkboxes.history ? 'active-checkbox' : ''
                }`}>
                <input
                  onChange={historyCheckboxHandler}
                  type="checkbox"
                  className="custom-checkbox"
                  checked={checkboxes.history}
                />
                <span>History</span>
                <img
                  className="check-img"
                  src={checkboxes.history ? checkedImg : uncheckedImg}
                  alt=""
                />
              </label>
              <select
                className="dropdown-item"
                value={genreToSearch}
                onChange={selectGenreHandler}>
                {genres.map(genre => (
                  <option key={genre}>{genre}</option>
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
