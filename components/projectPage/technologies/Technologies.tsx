import React from 'react';
import style from './Technologies.module.scss';

function Technologies(props) {
  const technologies = props.lang;

  return (
    <ul className={style.listContainer}>
      {technologies.map((technologie, index) => (
        <li key={index} className={style.technologies}>
          {Object.keys(technologie)[0]}
        </li>
      ))}
    </ul>
  );
}

export default Technologies;
