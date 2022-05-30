import React from 'react';
import { useTranslator } from './useTranslator';
import style from './translate.module.scss';

interface TranslateProps {
  translationKey: string;
}

const Translate = ({ translationKey }: TranslateProps) => {
  return <span className={style.breakLine}> {useTranslator(translationKey)} </span>;
};

export default Translate;
