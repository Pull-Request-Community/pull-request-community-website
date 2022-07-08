import { useRouter } from 'next/router';
import Head from 'next/head';
import { getMetaData } from '../../services/metaData';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import { useState } from 'react';
import DescriptionContainer from '../descriptionContainer/DescriptionContainer';
import style from './layout.module.scss';

const Layout = ({ children, descriptionContent }: LayoutProps) => {
  const currentRoute = useRouter().pathname;
  const { title, metaContents } = getMetaData(currentRoute);
  const [currentHeight, setCurrentHeight] = useState(0);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta property="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="viewport" content="width=device-width" />
        <title>{title}</title>
        {metaContents && metaContents.map((meta, i) => <meta key={i} {...meta} />)}
      </Head>
      <Navbar DesHeight={currentHeight} />
      <DescriptionContainer
        descriptionHeight={(hight) => {
          setCurrentHeight(hight);
        }}
      >
        <div className={style.description}>{descriptionContent}</div>
      </DescriptionContainer>
      {children}
      <Footer />
    </>
  );
};

interface LayoutProps {
  children: object;
  descriptionContent?: object;
}

export default Layout;
