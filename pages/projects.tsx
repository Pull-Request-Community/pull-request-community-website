import next from 'next';
import React from 'react';
import Navbar from '../components/layout/navbar/navbar';
import style from '../styles/projects.module.scss';

export default function vast() {
  return (
    <>
      <Navbar />
      <h3 className={style.title}>
        <div className={style.star} />
        vest
      </h3>
    </>
  );
}
