import React, { useEffect, useRef, useState } from 'react';
import style from './description.module.scss';
import colors from '../../styles/colors';
import { NextPage } from 'next';

interface Props {
  descriptionOutput: object | undefined;
  descriptionHeight: (height: number) => void;
}

const Description: NextPage<Props> = ({ descriptionOutput, descriptionHeight }) => {
  const myRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    descriptionHeight(height);
  }, [descriptionHeight, height]);

  useEffect(() => {
    const handleResize = () => {
      if (myRef.current) setHeight(myRef.current.offsetHeight);
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
