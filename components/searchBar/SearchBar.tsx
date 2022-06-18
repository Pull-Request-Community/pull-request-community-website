import React, { useCallback, ReactElement } from 'react';
import styles from './SearchBar.module.scss';

interface Props {
  handelSearch: (searchTerm: string) => void;
}

const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
};

const SearchBar = (props: Props): ReactElement => {
  const { handelSearch } = props;

  const debounceHandler = useCallback(debounce(handelSearch, 1000), []);

  const handleOnChange = async (event) => {
    const { value } = event.currentTarget;
    debounceHandler(value);
  };

  return (
    <div className={styles.textBoxContainer}>
      <input onChange={handleOnChange} type="text" className={styles.textBox} />
      <svg
        className="noa"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.55295 17.105C10.5265 17.105 12.3408 16.4261 13.7884 15.3004L18.4883 20L20 18.4883L15.3002 13.7888C16.427 12.3402 17.1059 10.526 17.1059 8.55249C17.1059 3.83686 13.2688 0 8.55295 0C3.83707 0 0 3.83686 0 8.55249C0 13.2681 3.83707 17.105 8.55295 17.105ZM8.55295 2.13812C12.0907 2.13812 14.9677 5.01497 14.9677 8.55249C14.9677 12.09 12.0907 14.9669 8.55295 14.9669C5.01523 14.9669 2.13824 12.09 2.13824 8.55249C2.13824 5.01497 5.01523 2.13812 8.55295 2.13812Z"
          fill="#BFC0C3"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
