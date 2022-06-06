import React from 'react';
import style from './MainPageDescription.module.scss';
import { useTranslator } from '../../language/useTranslator';

function MainPageDescription() {
  return (
    <>
      <h3>
        <span className={style.title}>{useTranslator('main_page.title')}</span>

        {useTranslator('main_page.description')}
      </h3>
      <p className={style.subDesc}>
        {useTranslator('main_page.contribute_desc.text1')}
        <br />
        {useTranslator('main_page.contribute_desc.text2')}
        <br />
        {useTranslator('main_page.join_as_mentors.text1')}
        <br />
        {useTranslator('main_page.join_as_mentors.text2')}
        <a
          href="https://forms.gle/6mHgTs5PnsfXUZ1f8"
          target="_blanck"
          title={useTranslator('main_page.mentors_signup')}
        >
          ✍
        </a>
      </p>
    </>
  );
}

export default MainPageDescription;
