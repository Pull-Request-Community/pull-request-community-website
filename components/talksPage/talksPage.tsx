import React, { useState } from 'react';
import style from './talksPage.module.scss';
import talksList from '../../assets/videos.json';
import YouTube from 'react-youtube';

function TalksPage() {
  const [currSrc, setSrc] = useState('GHbNaDSWUX8');
  const videosPerChunk = 4; // videos per chunk
  const opts = { height: '200px', width: '320px' };

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

  const setVideos = (videos) => {
    // add youtube videos
    const { sections, index } = videos;
    const youtubeVideos = sections.map((video, i) => (
      <div className={style.item} id={`item${i}_${index}`} key={`item${i}_${index}`}>
        <YouTube
          videoId={video.src}
          opts={opts}
          title={video.title}
          onPlay={onVideoClick}
        ></YouTube>
      </div>
    ));
    // add empty divs to fill section
    if (sections.length < videosPerChunk) {
      for (let i = sections.length; i < videosPerChunk; i++) {
        youtubeVideos.push(
          <div
            className={style.item}
            id={`item${i}_${index}`}
            key={`item${i}_${index}`}
            style={opts}
          ></div>
        );
      }
    }
    return youtubeVideos;
  };

  const setSections = (videos) => {
    // organize sections based on categories
    const { chunkVideos, index } = videos;

    return chunkVideos.map((sections, i) => (
      <section
        className={style.section}
        id={`section${i + 1}_${index}`}
        key={`section${i + 1}_${index}`}
      >
        <a
          href={`#section${calcArrowSide(i + 1, i, chunkVideos.length)}_${index}`}
          className={style.arrow__btn}
        >
          ‹
        </a>
        {setVideos({ sections, index })}
        <a
          href={`#section${calcArrowSide(i + 1, i + 2, chunkVideos.length)}_${index}`}
          className={style.arrow__btn}
        >
          ›
        </a>
      </section>
    ));
  };

  const setCategories = (categoryVideos) => {
    // divide each category's videos into chunks
    const { videos, index } = categoryVideos;

    const chunkVideos = videos.reduce((chunkArray, video, i) => {
      const chunkIndex = Math.floor(i / videosPerChunk);
      if (!chunkArray[chunkIndex]) {
        chunkArray[chunkIndex] = []; // start a new chunk
      }
      chunkArray[chunkIndex].push(video);
      return chunkArray;
    }, []);

    return setSections({ chunkVideos, index });
  };

  return (
    <div className={style.talksContainer}>
      <iframe
        id="video"
        className={style.video}
        height="600"
        width="1280"
        src={`https://www.youtube.com/embed/${currSrc}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      ></iframe>{' '}
      {talksList.map((category, index) => (
        <span key={`category${index}`}>
          <h1 className={style.title}>{category.title}</h1>
          <div className={style.wrapper}>{setCategories({ videos: category.videos, index })}</div>
        </span>
      ))}
    </div>
  );
}

export default TalksPage;
