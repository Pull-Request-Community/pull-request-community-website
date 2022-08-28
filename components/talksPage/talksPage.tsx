import React, { useState } from 'react';
import style from './talksPage.module.scss';
import talksList from '../../assets/videos.json';
import YouTube from 'react-youtube';

function TalksPage() {
  const [currSrc, setSrc] = useState('GHbNaDSWUX8');

  const calcArrowSide = (curr, side, length) => {
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

  const onVideoClick = (event) => {
    event.target.pauseVideo(); // stop chosen video
    setSrc(event.target.playerInfo.videoData.video_id); // open the chosen video on the big iframe
  };

  const setVideos = (props) => { // add youtube videos
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
        <YouTube videoId={video.src} opts={opts} title={video.title} onPlay={onVideoClick}></YouTube>{' '}
      </div>
    ));
  };

  const setSections = (props) => { // organize sections based on categories
    const chunkVideos = props.chunkVideos;
    const index = props.index;

    return chunkVideos.map((sections, i) => (
      <section
        className={style.section}
        id={'section' + (i + 1) + '_' + index}
        key={'section' + (i + 1) + '_' + index}
      >
        <a
          href={'#section' + calcArrowSide(i + 1, i, chunkVideos.length) + '_' + index}
          className={style.arrow__btn}
        >
          ‹
        </a>
        {setVideos({ sections, index })}
        <a
          href={'#section' + calcArrowSide(i + 1, i + 2, chunkVideos.length) + '_' + index}
          className={style.arrow__btn}
        >
          ›
        </a>
      </section>
    ));
  };

  const setCategories = (props) => { // divide each category's videos into chunks
    const perChunk = 3; // videos per chunk

    const chunkVideos = props.videos.reduce((chunkArray, video, index) => {
      const chunkIndex = Math.floor(index / perChunk);
      if (!chunkArray[chunkIndex]) {
        chunkArray[chunkIndex] = []; // start a new chunk
      }
      chunkArray[chunkIndex].push(video);
      return chunkArray;
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
      {talksList.map((category, index) => (
        <span key={'category' + index}>
          <h1 className={style.title}>{category.title}</h1>
          <div className={style.wrapper}>{setCategories({ videos: category.videos, index })}</div>
        </span>
      ))}
    </div>
  );
}

export default TalksPage;
