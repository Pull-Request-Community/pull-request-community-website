import React from 'react';
import style from './MainPageDescription.module.scss';
import { useTranslator } from '../language/useTranslator';
import languageFile from './MainPageDescription.language.json';

function MainPageDescription() {
  return (
    <>
      <h3>
        <span className={style.title}>{useTranslator('title', languageFile)}</span>
        <span className={style.breakLine}>{useTranslator('description', languageFile)}</span>
      </h3>
      <p className={style.breakLine}>
        {useTranslator('contribute', languageFile)}
        <a href="https://forms.gle/6mHgTs5PnsfXUZ1f8" target="_blanck">
          ✍
        </a>
      </p>
    </>
  );
}

export default MainPageDescription;
