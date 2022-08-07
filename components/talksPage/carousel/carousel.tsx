import React from 'react';
import style from './carousel.module.scss';
import data from '../../../assets/videos.json';

function Carousel() {
  const sectionsList = data;

  const calcSide = (curr, side) => {
    if (side > curr) {
      if (curr === sectionsList.length) {
        return 1;
      }
    } else if (side < curr) {
      if (curr === 1) {
        return sectionsList.length;
      }
    }
    return side;
  };

  return (
    <div>
      <h1 className={style.title}>Meetup records</h1>
      <div className={style.wrapper}>
        {sectionsList.map((section, i) => (
          <section className={style.section} id={'section' + (i + 1)} key={'section' + (i + 1)}>
            <a href={'#section' + calcSide(i + 1, i)} className={style.arrow__btn}>
              ‹
            </a>
            {section.videos.map((video) => (
              <div className={style.item} key={'item' + (i + 1)}>
                <iframe
                  height="200"
                  src={'https://www.youtube.com/embed/' + video.src}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={video.title}
                ></iframe>{' '}
              </div>
            ))}
            <a href={'#section' + calcSide(i + 1, i + 2)} className={style.arrow__btn}>
              ›
            </a>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
