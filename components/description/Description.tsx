import React, { useEffect, useRef, useState } from 'react';
import style from './description.module.scss';

const Description = ({ descriptionOutput, descriptionHeight }) => {
  const myRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    descriptionHeight(height);
  }, [descriptionHeight, height]);

  useEffect(() => {
    const handleResize = () => {
      setHeight(myRef.current.offsetHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef]);

  return (
    <div ref={myRef} id="container" className={style.container}>
      {descriptionOutput}
    </div>
  );
};

export default Description;
