import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Genres } from '../models'

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

  const [genreToSearch, setGenreToSearch] = useState<string>('none');

  const searchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputValue(event.target.value);
  };

  const submitSearchRequest = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (inputValue.trim()) {
      history.push(
        `/search-results/${inputValue}/${genreToSearch}/${dateRange.fromYear}/${dateRange.toYear}/${checkboxes.favorites}/${checkboxes.history}/1`
      );
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
    if (dateRange.fromYear >= dateRange.toYear) return;
    setDateRange({ ...dateRange, fromYear: dateRange.fromYear + 1 });
  };

  const fromDateInputDecrease = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (dateRange.fromYear <= lowerDateLimit) return;
    setDateRange({ ...dateRange, fromYear: dateRange.fromYear - 1 });
  };

  const toYearInputIncrease = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const upperDataLimit = new Date().getFullYear();
    if (dateRange.toYear >= upperDataLimit) return;
    setDateRange({ ...dateRange, toYear: dateRange.toYear + 1 });
  };
  const toYearInputDecrease = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (dateRange.toYear <= dateRange.fromYear) return;
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
    setGenreToSearch(event.target.value);
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
                  <button onClick={toYearInputDecrease}>-</button>
                  <input type="number" value={dateRange.toYear} readOnly />
                  <button onClick={toYearInputIncrease}>+</button>
                </span>
              </div>
              <label
                className={`dropdown-item ${checkboxes.favorites ? 'active-checkbox' : ''
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
                className={`dropdown-item ${checkboxes.history ? 'active-checkbox' : ''
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
                {Object.values(Genres).map((genre, i) => (
                  <option value={genre} key={i}>
                    {genre}
                  </option>
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
