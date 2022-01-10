import React from 'react';
import style from './description.module.scss';
import colors from '../../styles/colors';

const Description = ({ descriptionOutput }) => {
  return <div className={style.container}>{descriptionOutput}</div>;
};

export default Description;
