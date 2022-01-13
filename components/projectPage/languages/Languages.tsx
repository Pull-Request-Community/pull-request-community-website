import React from 'react';
import style from './Languages.module.scss';

function Languages() {
  const languages = ['HTML', 'CSS', 'JavaScript']; //in the future: API
  const languagesArr = languages.map((language) => {
    return (
      <li key={language} className={style.languages}>
        {language}
      </li>
    );
  });

  return <ul className={style.listContainer}>{languagesArr}</ul>;
}

export default Languages;
