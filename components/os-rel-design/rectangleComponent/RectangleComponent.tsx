/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import style from './RectangleComponent.module.scss';
import logo from '../../../public/assets/logo.svg';
import heart from '../../../public/assets/Heart.svg';
import ImageOptions from '../ImageOptions/ImageOptions';
import { renderCanvas } from '../../../utils/canvas';

export default function RectangleLogoGenerator() {
  const [size, setSize] = useState(94);
  const [imageUrl, setImageUrl] = useState('');

  const inputRef = useRef();

  return (
    <>
      <div ref={inputRef} className={style.container}>
        {/* pull request logo */}
        <div className={style.logoBackground}>
          <img className={style.logo} src={logo.src} alt="logo" />
        </div>
        {/* heart */}
        <img className={style.heart} src={heart.src} alt="heart" />
        {/* image upload */}
        <div className={style.uploadImageContainer}>
          {!!imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className={style.ImageUpload} alt={'upload-img'} src={imageUrl} height={size} />
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
