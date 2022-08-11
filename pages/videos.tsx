import React from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Layout from '../components/layout/layout';
import styles from '../styles/Videos.module.scss';
import Head from 'next/head';

export default function videos({ Component, pageProps }: AppProps) {
  const description = <>הרצאות של חברי פול-ריקוסט</>;

  return (
    <>
      <Head>
        <title>Videos</title>
      </Head>
      <Layout descriptionText={description}>
        <div className={styles.container}></div>
      </Layout>
    </>
  );
}
