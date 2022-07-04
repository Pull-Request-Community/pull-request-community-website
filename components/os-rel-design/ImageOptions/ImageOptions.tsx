import React from 'react';
import style from './ImageOptions.module.scss';

function ImageOptions({ onSetImage, onSetSize, size, onRenderCanvas, imageUrl }) {
  function preview(event) {
    onSetImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <>
      <div className={style.FileOptionsContainer}>
        <input title="click to add icon" type="file" onChange={preview} />
        <button onClick={onRenderCanvas}>Download Image</button>
      </div>
      {imageUrl && (
        <div>
          <p className={style.changeIconSizeText}>change icon size</p>
          <input onChange={(e) => onSetSize(e.target.value)} value={size} type="number"></input>
        </div>
      )}
    </>
  );
}

export default ImageOptions;
