import next from 'next';
import React from 'react';
import Description from '../components/description/Description';
import Navbar from '../components/layout/navbar/navbar';
import style from '../styles/projects.module.scss';
import ProjectPage from '../components/projectPage/projectPage';
export default function vast() {
  return (
    <>
      <Navbar />
      <Description descriptionOutput={<ProjectPage />} />
    </>
  );
}
