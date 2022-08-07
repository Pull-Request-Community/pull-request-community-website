import React from 'react';
import style from './carousel.module.scss';
import data from '../../../assets/videos.json';

function Carousel() {
  const dataList = data;

  const calcSide = (curr, side, length) => {
    if (side > curr) {
      if (curr === length) {
        return 1;
      }
    } else if (side < curr) {
      if (curr === 1) {
        return length;
      }
    }
    return side;
  };

  const setVideos = (props) => {
    return props.sections.map((video, i) => (
      <div className={style.item} key={'item' + i + '_' + props.index}>
        <iframe
          height="200"
          src={'https://www.youtube.com/embed/' + video.src}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={video.title}
        ></iframe>{' '}
      </div>
    ));
  };

  const setSections = (props) => {
    const chunkVideos = props.chunkVideos;
    const index = props.index;

    return chunkVideos.map((sections, i) => (
      <section
        className={style.section}
        id={'section' + (i + 1) + '_' + index}
        key={'section' + (i + 1) + '_' + index}
      >
        <a
          href={'#section' + calcSide(i + 1, i, chunkVideos.length) + '_' + index}
          className={style.arrow__btn}
        >
          ‹
        </a>
        {setVideos({ sections, index })}
        <a
          href={'#section' + calcSide(i + 1, i + 2, chunkVideos.length) + '_' + index}
          className={style.arrow__btn}
        >
          ›
        </a>
      </section>
    ));
  };

  const setCategories = (props) => {
    const perChunk = 3; // items per chunk

    const chunkVideos = props.videos.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, []);

    return setSections({ chunkVideos, index: props.index });
  };

  return (
    <div>
      {dataList.map((category, index) => (
        <span key={'category' + index}>
          <h1 className={style.title}>{category.title}</h1>
          <div className={style.wrapper}>{setCategories({ videos: category.videos, index })};</div>
        </span>
      ))}
    </div>
  );
}

export default Carousel;
