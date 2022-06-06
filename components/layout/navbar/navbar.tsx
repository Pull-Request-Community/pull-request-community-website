import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { mdiGithub } from '@mdi/js';
import Icon from '@mdi/react';
import { useTheme } from 'next-themes';
import BasicButton from '../../buttons/basicButton';
import { useRouter } from 'next/router';
import SocialNetworks from '../../socialNetworks/socialNetworks';
import { mobile } from '../../../utils/mediaQueries';
import { useEffect, useState } from 'react';
import styles from './navbar.module.scss';
import { useTranslator } from '../../language/useTranslator';

const Navbar = ({ DesHeight }) => {
  const { asPath } = useRouter();
  const isMobile = useMediaQuery({ query: mobile });
  const [className, setClassName] = useState('navbar__logo');
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.pageYOffset >= DesHeight - 50) {
        setClassName('navbar__logo small');
      }
      if (window.pageYOffset <= DesHeight - 50) {
        setClassName('navbar__logo');
      }
    };
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [DesHeight]);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="navbar">
      <div className="layout__container navbar__container">
        <div className="navbar__wrapper">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className={styles.toggleDarkMode}
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              style={{ height: '24px', width: '24px' }}
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          </button>
          {!isMobile && <SocialNetworks />}
          <BasicButton>
            <a
              className="navbar__btn"
              href="https://github.com/MichalPorag/pull-request-community#adding-your-profile"
            >
              <span>{useTranslator('navbar.add_me')}</span>{' '}
              <Icon style={{ width: '24px' }} className="navbar__btn--icon" path={mdiGithub} />
            </a>
          </BasicButton>
        </div>
        <Link shallow href="/">
          <a className={className}>
            <img className="inner-logo" src="/images/logo-2.0.svg" />
          </a>
        </Link>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          z-index: 100;
          color: white;
          height: 50px;
          background-color: var(--header-background);
          display: flex;
          align-items: center;
          box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.25);
          width: 100%;
        }

        .navbar__wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .navbar__container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 25px;
        }

        .navbar__btn--icon {
          color: blue;
        }

        .navbar__btn {
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
        }

        .navbar__btn > span {
          font-weight: bold;
        }

        .inner-logo {
          width: inherit;
          height: inherit;
          transform: rotate(45deg);
          transition: transform 0.3s linear;
        }

        .navbar__logo {
          margin-top: 52px;
          background: linear-gradient(180deg, #01007d 0%, #832ec6 47.92%, #dc665e 100%);
          width: 74px;
          height: 74px;
          border-radius: 10px;
          transform: rotate(-45deg);
          transition: all 0.3s linear;
        }

        .navbar__logo.small {
          margin-top: 0px;
          width: 36px;
          height: 36px;
          border-radius: 6px;
          transform: rotate(0deg);
        }

        .navbar__logo.small .inner-logo {
          transform: rotate(0deg);
        }

        .navbar__title {
          font-size: 2.2rem;
        }

        .navbar__navs {
          display: flex;
          align-items: center;
          font-size: 2.2rem;
        }

        .navbar__tabs {
          display: flex;
          margin-right: 30px;
        }

        .navbar__tab {
          position: relative;
          transition: color 0.2s ease-in-out;
          margin-left: 20px;
        }

        .navbar__tab:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease-out;
        }

        .navbar__tab-active.navbar__tab:after,
        .navbar__tab:hover:after {
          width: 100%;
        }

        .navbar__tab-active.navbar__tab,
        .navbar__tab:hover {
          color: var(--primary);
        }

        @media only screen and (max-width: 767px) {
          .navbar__navs {
            display: none;
          }
        }

        @media only screen and (max-width: 600px) {
          .navbar {
            height: 50px;
          }

          .navbar__btn {
            width: 110px;
          }

          .navbar__btn > span {
            font-size: 1.8rem;
          }
          .navbar__logo {
            margin: 48px 0 0 -10px;
            width: 68px;
            height: 68px;
          }
          .navbar__logo.small {
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
