import { useRouter } from 'next/router';
import Head from 'next/head';
import { getMetaData } from '../../services/metaData';
import Navbar from './navbar/navbar';
import MainContainers from '../../static/mainContainer';
import { useMemo } from 'react';

const Layout = ({ children }: LayoutProps) => {
  const currentRoute = useRouter().pathname;
  console.log(currentRoute);
  const { title, metaContents } = getMetaData(currentRoute);
  const CurrentMainContainer = useMemo(() => MainContainers[currentRoute], [currentRoute]);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta property="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <title>{title}</title>
        {metaContents && metaContents.map((meta, i) => <meta key={i} {...meta} />)}
      </Head>
      <Navbar />
      {CurrentMainContainer && (
        <div className="main-container">
          {/* Main Site Container (can be on any page or not to be at all) */}
          <CurrentMainContainer />
        </div>
      )}
      <div className="layout__container layout__body--container">{children}</div>

      <style>{`
                .layout__container {
                    margin: 0 auto;
                    padding: 0 25px;
                }
                .layout__body--container {
                    margin-top: 70px;
                }
            `}</style>
    </div>
  );
};

interface LayoutProps {
  children: object;
}

export default Layout;
