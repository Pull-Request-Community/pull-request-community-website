import next from 'next';
import React, { useState } from 'react';
import Description from '../components/description/Description';
import Navbar from '../components/layout/navbar/navbar';
import style from '../styles/projects.module.scss';
import ProjectPage from '../components/projectPage/projectPage';
import Footer from '../components/layout/footer/footer';
import Layout from '../components/layout/layout';

export default function vast() {
  const [currentHeight, setCurrentHeight] = useState(0);
  console.log(currentHeight);

  return (
    <>
      <Layout descriptionText={ProjectPage()}>
        <h1>projects</h1>
      </Layout>
    </>
  );
}
