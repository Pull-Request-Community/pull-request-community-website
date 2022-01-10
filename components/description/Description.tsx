import React from 'react';
import style from './description.module.scss';
import colors from '../../styles/colors';

const Description = (props) => {
  return (
    <div className={style.container}>
      {props.descriptionOutput}
      <ul className={style.squareContainer}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <li key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default Description;
