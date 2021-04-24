import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Genres } from '../models';

import '../styles/SearchField.scss';

const loupeIcon = '/images/search-icon.svg';
const checkedImg = '/images/searchFieldIcons/checked.svg';
const uncheckedImg = '/images/searchFieldIcons/unchecked.svg';

const SearchField: React.FC = () => {
  const history = useHistory();

  const [inputValue, setInputValue] = useState<string>('');

  const [focus, setFocus] = useState<boolean>(false);

  const [dropdown, setDropdown] = useState<boolean>(false);

  const lowerDateLimit = 1980;

  const [dateRange, setDateRange] = useState<{
    fromYear: number;
    toYear: number;
  }>({
    fromYear: lowerDateLimit,
    toYear: new Date().getFullYear()
  });

  const [checkboxes, setCheckboxes] = useState<{
    favorites: boolean;
    history: boolean;
  }>({
    favorites: false,
    history: false
  });

  const [genreToSearch, setGenreToSearch] = useState<Genres | 'none'>('none');

  const [isDateInvalid, setIsDateInvalid] = useState<boolean>(false);

  const searchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputValue(event.target.value);
  };

  const submitSearchRequest = (event: React.FormEvent) => {
    event.preventDefault();

    const query = new URLSearchParams({
      title: inputValue,
      genre: genreToSearch,
      fromYear: dateRange.fromYear.toString(),
      toYear: dateRange.toYear.toString(),
      favorites: checkboxes.favorites.toString(),
      history: checkboxes.history.toString(),
      page: '1'
    });

    if (inputValue.trim()) {
      history.push({
        pathname: '/search-results',
        search: query.toString()
      });
    }
  };

  const searchInputFocus = (event: React.SyntheticEvent): void => {
    setFocus(true);
  };

  const searchInputBlur = (event: React.SyntheticEvent): void => {
    setFocus(false);
  };

  const mouseEnterDropdown = (event: React.SyntheticEvent): void => {
    setDropdown(true);
  };

  const mouseLeaveDropdown = (event: React.SyntheticEvent): void => {
    setDropdown(false);
  };

  const fromDateInputIncrease = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (dateRange.fromYear >= dateRange.toYear) {
      setIsDateInvalid(true);
      setTimeout(() => setIsDateInvalid(false), 2000);
      return;
    }
    setDateRange({ ...dateRange, fromYear: dateRange.fromYear + 1 });
  };

  const fromDateInputDecrease = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setIsDateInvalid(false);
    setDateRange({ ...dateRange, fromYear: dateRange.fromYear - 1 });
  };

  const toDateInputIncrease = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const upperDataLimit = new Date().getFullYear();
    if (dateRange.toYear >= upperDataLimit) return;
    setIsDateInvalid(false);
    setDateRange({ ...dateRange, toYear: dateRange.toYear + 1 });
  };
  const toDateInputDecrease = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (dateRange.toYear <= dateRange.fromYear) {
      setIsDateInvalid(true);
      setTimeout(() => setIsDateInvalid(false), 2000);
      return;
    }
    setDateRange({ ...dateRange, toYear: dateRange.toYear - 1 });
  };

  const favoritesCheckboxHandler = (
    event: React.InputHTMLAttributes<HTMLInputElement>
  ): void => {
    setCheckboxes({ ...checkboxes, favorites: !checkboxes.favorites });
  };

  const historyCheckboxHandler = (
    event: React.InputHTMLAttributes<HTMLInputElement>
  ): void => {
    setCheckboxes({ ...checkboxes, history: !checkboxes.history });
  };

  const selectGenreHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setInputValue('by-genre');
    setGenreToSearch(event.target.value as Genres);
  };

  return (
    <>
      <form onSubmit={submitSearchRequest} className="search-form">
        <input
          onBlur={searchInputBlur}
          value={inputValue}
          onChange={searchInputChange}
          id="search"
          type="search"
          placeholder="Search"
          className="header-search"
          onFocus={searchInputFocus}
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
                    min={lowerDateLimit}
                    value={dateRange.fromYear}
                    readOnly
                  />
                  <button onClick={fromDateInputIncrease}>+</button>
                </span>
                <span>
                  <button onClick={toDateInputDecrease}>-</button>
                  <input type="number" value={dateRange.toYear} readOnly />
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
              <select value={genreToSearch} onChange={selectGenreHandler}>
                <option value="none">Select genre</option>
                {Object.entries(Genres).map(([key, value]) => (
                  <option value={value} key={key}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="search-field-message-wrapper">
              {isDateInvalid && (
                <p className="search-field-message">
                  You are trying to choose invalid date range
                </p>
              )}
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
