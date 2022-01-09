import React from 'react';
import SocialNetworks from '../../socialNetworks/socialNetworks';
import { useMediaQuery } from 'react-responsive';
import { mobile } from '../../../utils/mediaQueries';
import styles from './footer.module.scss';

const Footer = () => {
  const isMobile = useMediaQuery({ query: mobile });
  return isMobile ? (
    <div className={styles.footer}>
      {' '}
      <SocialNetworks className={styles.socialMediaIcons} />
    </div>
  ) : (
    <></>
  );
};

export default Footer;
