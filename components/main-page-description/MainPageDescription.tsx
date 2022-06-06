import React from 'react';
import style from './MainPageDescription.module.scss';
import { useTranslator } from '../language/useTranslator';

function MainPageDescription() {
  return (
    <>
      <h3>
        <span className={style.title}>{useTranslator('main_page.title')}</span>
        <span className={style.breakLine}>{useTranslator('main_page.description')}</span>
      </h3>
      <p className={style.breakLine}>
        {useTranslator('main_page.contribute')}
        <a href="https://forms.gle/6mHgTs5PnsfXUZ1f8" target="_blanck">
          ✍
        </a>
      </p>
    </>
  );
}

export default MainPageDescription;
