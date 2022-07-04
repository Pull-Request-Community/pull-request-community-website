import React from 'react';
import style from './talksPage.module.scss';

function TalksPage() {
  return (
    <div className={style.descriptionContainer}>
      <h3 className={style.title}>Talks</h3>
      <p dir="auto" className={style.description}>
        <p>
          Pull Request is the biggest open-source community in israel with more then 4.5K developers
        </p>{' '}
      </p>

      <div className={style.infoContainer}>
        <div className={style.license}>Mozilla Public License 2.0</div>
      </div>
    </div>
  );
}

export default TalksPage;
