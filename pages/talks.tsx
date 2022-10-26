import React from 'react';
import TalksPage from '../components/talksPage/talksPage';
import style from '../styles/talks.module.scss';
import Layout from '../components/layout/layout';
import languageFile from '../components/talksPage/talksPage.language.json';
import { useTranslator } from '../components/language/useTranslator';

export default function Vast() {
  return (
    <Layout
      descriptionContent={
        <div className={style.descriptionContainer}>
          <h3 className={style.title}>{useTranslator('title', languageFile)}</h3>
          <p dir="auto" className={style.description}>
            {useTranslator('description', languageFile)}
          </p>
        </div>
      }
    >
      <TalksPage />
    </Layout>
  );
}
