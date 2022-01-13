import next from 'next';
import React from 'react';
import Description from '../components/description/Description';
import Navbar from '../components/layout/navbar/navbar';
import style from '../styles/projects.module.scss';
import ProjectPage from '../components/projectPage/projectPage';
import Footer from '../components/layout/footer/footer';
import Layout from '../components/layout/layout';
export default function vast() {
  return (
    <>
      <Navbar />
      <Description descriptionOutput={<ProjectPage />} />
      <Footer />
    </>
  );
}
