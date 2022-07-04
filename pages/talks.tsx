import React from 'react';
import TalksPage from '../components/talksPage/talksPage';
import Layout from '../components/layout/layout';

export default function Vast() {
  return (
    <Layout descriptionText={TalksPage()}>
      <h1>talks</h1>
    </Layout>
  );
}
