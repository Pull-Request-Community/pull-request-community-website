/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import style from './SquerComponent.module.scss';
import logo from '../../../public/assets/logo.svg';
import heart from '../../../public/assets/Heart.svg';
import ImageOptions from '../ImageOptions/ImageOptions';
import { renderCanvas } from '../../../utils/canvas';

export default function SquerLogoGenerator() {
  const [size, setSize] = useState(120);
  const [imageUrl, setImageUrl] = useState('');

  const inputRef = useRef();

  return (
    <>
      <div ref={inputRef} className={style.container}>
        <div className={style.logoContainer}>
          <img className={style.logo} src={logo.src} alt="logo" />
        </div>
        <div className={style.heartsContainer}>
          <img className={style.heart} src={heart.src} alt="heart" />
          <img className={style.heart} src={heart.src} alt="heart" />
          <img className={style.heart} src={heart.src} alt="heart" />
        </div>
        <div className={style.uploadImageContainer}>
          {!!imageUrl && (
            <img className={style.ImageApload} alt="upload-img" src={imageUrl} height={size} />
          )}
        </div>
      </div>
      <ImageOptions
        imageUrl={imageUrl}
        onSetImage={(e) => setImageUrl(e)}
        onSetSize={(e) => setSize(e)}
        size={size}
        onRenderCanvas={() => renderCanvas(inputRef)}
      />
    </>
  );
}
