import { useRouter } from 'next/router';
import Head from 'next/head';
import { getMetaData } from '../../services/metaData';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Description from '../description/Description';
import { useState } from 'react';

const Layout = ({ children, descriptionText }: LayoutProps) => {
  const currentRoute = useRouter().pathname;
  const { title, metaContents } = getMetaData(currentRoute);
  const [currentHeight, setCurrentHeight] = useState(0);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta property="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="viewport" content="width=device-width" />
        <title>{title}</title>
        {metaContents && metaContents.map((meta, i) => <meta key={i} {...meta} />)}
      </Head>
      <Navbar DesHeight={currentHeight} />
      <Description
        descriptionOutput={descriptionText}
        descriptionHeight={(hight) => {
          setCurrentHeight(hight);
        }}
      />
      <div className="layout__container layout__body--container">{children}</div>
      <Footer />
    </div>
  );
};

interface LayoutProps {
  children?: object;
  descriptionText?: object;
}

export default Layout;
