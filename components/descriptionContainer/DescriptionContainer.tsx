import React, { useEffect, useRef, useState } from 'react';
import style from './DescriptionContainer.module.scss';

const DescriptionContainer = (props) => {
  const { children, descriptionHeight } = props;
  const myRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    descriptionHeight(height);
  }, [height]);

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
      {children}
    </div>
  );
};

export default DescriptionContainer;
