import React from 'react';
import Carousel from './carousel/carousel';
import style from './talksPage.module.scss';

function TalksPage() {
  return (
    <div className={style.descriptionContainer}>
      <h3 className={style.title}>Talks</h3>
      <p dir="auto" className={style.description}>
        Pull Request is the biggest open-source community in israel with more then 4.5K developers.
      </p>
      <iframe
        className={style.video}
        height="400"
        src="https://www.youtube.com/embed/2D0LmCtVTSk"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      ></iframe>{' '}
      <Carousel />
    </div>
  );
}

export default TalksPage;
