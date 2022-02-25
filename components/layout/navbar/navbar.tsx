import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { mdiGithub } from '@mdi/js';
import Icon from '@mdi/react';
import Title from '../../typography/title';
import { useTheme } from 'next-themes';
import BasicButton from '../../buttons/basicButton';
import colors from '../../../styles/colors';
import { useRouter } from 'next/router';
import SocialNetworks from '../../socialNetworks/socialNetworks';
import { mobile } from '../../../utils/mediaQueries';

const paths = [];

const Navbar = () => {
  const { asPath } = useRouter();
  const isMobile = useMediaQuery({ query: mobile });
  const { theme, setTheme } = useTheme();

  return (
    <div className="navbar">
      <div className="layout__container navbar__container">
        <div className="navbar__wrapper">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="toggle-dark-mode"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="var(--card-background)"
              stroke="var(--card-background)"
              style={{ height: '24px', width: '24px' }}
            >
              {theme === 'dark' ? (
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
              <span>הוסיפו אותי</span>{' '}
              <Icon style={{ width: '24px' }} className="navbar__btn--icon" path={mdiGithub} />
            </a>
          </BasicButton>
        </div>
        <div className="navbar__wrapper">
          <Link shallow href="/">
            <a className="logo__wrapper">
              <img className="navbar__logo" src="/images/logo.png" />
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .navbar {
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

        .navbar__logo {
          position: relative;
          top: 25px;
          left: -15px;
          z-index: 1;
          width: 82px;
          height: 82px;
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
        }
      `}</style>
    </div>
  );
};

export default Navbar;
