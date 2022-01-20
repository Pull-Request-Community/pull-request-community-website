import React from 'react';
import style from './Languages.module.scss';

function Languages() {
  const languages = ['HTML', 'CSS', 'JavaScript']; //in the future: API

  return (
    <ul className={style.listContainer}>
      {languages.map((language, index) => (
        <li key={index} className={style.languages}>
          {language}
        </li>
      ))}
    </ul>
  );
}

export default Languages;
