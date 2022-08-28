import React from 'react';
import TalksPage from '../components/talksPage/talksPage';
import style from '../styles/talks.module.scss';
import Layout from '../components/layout/layout';

export default function Vast() {
  return <Layout descriptionContent={
    <div className={style.descriptionContainer}>
      <h3 className={style.title}>Talks</h3>
      <p dir="auto" className={style.description}>Pull Request is the biggest open-source community in israel with more then 4.5K developers.</p>
    </div>}>
    <TalksPage />
  </Layout>;
}
