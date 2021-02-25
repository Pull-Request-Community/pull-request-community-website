import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import styles from './filter.module.scss';

const Search = () => {
  const [input, setInput] = useState('');
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="חיפוש אנשים..."
      />
      <button className={styles.searchButton}>
        <Icon path={mdiMagnify} />
      </button>
    </div>
  );
};

export default Search;
