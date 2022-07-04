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
      <div className={style.videos}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2D0LmCtVTSk"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        ></iframe>{' '}
      </div>
    </div>
  );
}

export default TalksPage;
