import React from 'react';
import style from './Technologies.module.scss';

function Technologies() {
  const technologies = ['HTML', 'CSS', 'JavaScript']; //in the future: API

  return (
    <ul className={style.listContainer}>
      {technologies.map((technologie, index) => (
        <li key={index} className={style.technologies}>
          {technologie}
        </li>
      ))}
    </ul>
  );
}

export default Technologies;
