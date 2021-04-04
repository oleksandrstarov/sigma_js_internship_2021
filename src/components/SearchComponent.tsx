import React, { useState } from 'react';
import Button from './Button';
import Image from './Image';
import Input from './Input';

const SearchComponent: React.FC = () => {
  const searchIcon = '/images/search-icon.png';

  const [input, setInput] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (input.trim().length) {
      console.log(input);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler} className="search-form">
        <Input
          value={input}
          onChange={changeHandler}
          id="search"
          type="search"
          placeholder="Search"
          className="header-search"
        />

        <Button type="submit">
          <Image src={searchIcon} alt="search-icon" />
        </Button>
      </form>
    </>
  );
};
export default SearchComponent;
