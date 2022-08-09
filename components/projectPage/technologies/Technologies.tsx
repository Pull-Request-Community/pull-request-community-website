import React from 'react';
import TechnologiesProps from './Technologies.model';
import style from './Technologies.module.scss';

function Technologies(props: TechnologiesProps) {
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
