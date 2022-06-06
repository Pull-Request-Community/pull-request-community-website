import React from 'react';
import style from './MainPageDescription.module.scss';
import Translate from '../language/Translate';

function MainPageDescription() {
  return (
    <>
      <h3>
        <span className={style.title}>
          <Translate translationKey={'main_page.title'} />
        </span>
        <Translate translationKey={'main_page.description'} />
      </h3>
      <p className={style.subDesc}>
        <Translate translationKey={'main_page.contribute'} />
        <a href="https://forms.gle/6mHgTs5PnsfXUZ1f8" target="_blanck">
          ✍
        </a>
      </p>
    </>
  );
}

export default MainPageDescription;
