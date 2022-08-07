import React, { useState } from 'react';
import style from './talksPage.module.scss';
import data from '../../assets/videos.json';
import YouTube from 'react-youtube';

function TalksPage() {
  const dataList = data;
  const [currSrc, setSrc] = useState('GHbNaDSWUX8');

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

  const onIframe = (event) => {
    event.target.pauseVideo();
    setSrc(event.target.playerInfo.videoData.video_id);
  };

  const setVideos = (props) => {
    const opts = {
      height: '200',
      width: '320',
    };

    return props.sections.map((video, i) => (
      <div
        className={style.item}
        id={'item' + i + '_' + props.index}
        key={'item' + i + '_' + props.index}
      >
        <YouTube videoId={video.src} opts={opts} title={video.title} onPlay={onIframe}></YouTube>{' '}
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
    <div className={style.descriptionContainer}>
      <h3 className={style.title}>Talks</h3>
      <p dir="auto" className={style.description}>
        Pull Request is the biggest open-source community in israel with more then 4.5K developers.
      </p>
      <iframe
        className={style.video}
        height="400"
        src={'https://www.youtube.com/embed/' + currSrc}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      ></iframe>{' '}
      {dataList.map((category, index) => (
        <span key={'category' + index}>
          <h1 className={style.title}>{category.title}</h1>
          <div className={style.wrapper}>{setCategories({ videos: category.videos, index })};</div>
        </span>
      ))}
    </div>
  );
}

export default TalksPage;
