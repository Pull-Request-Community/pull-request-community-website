import React from 'react';
import Icon from '@mdi/react';
import { mdiTelegram, mdiFacebook, mdiDiscord, mdiEmailNewsletter } from '@mdi/js';
import SocialButton from '../../buttons/socialButton';

const SocialNetowrks = () => {
  const socialLinks = [
    {
      name: 'telegram',
      displayName: 'Telegram',
      url: 'https://t.me/joinchat/SNHcwLegH2-Pjx4B',
      icon: mdiTelegram,
    },
    {
      name: 'facebook',
      displayName: 'Facebook',
      url: 'https://www.facebook.com/groups/PullRequest',
      icon: mdiFacebook,
    },
    {
      name: 'discord',
      displayName: 'Discord',
      url: 'https://discord.gg/FDXyR4KP',
      icon: mdiDiscord,
    },
    {
      name: 'newsletter',
      displayName: 'הצטרפו לרשימת התפוצה',
      url: 'https://forms.gle/cc6tSYQQEGnsbeAb9',
      icon: mdiEmailNewsletter,
    },
  ];

  return (
    <ul className="social__list">
      {socialLinks.map(function (item, index) {
        return (
          <li>
            <SocialButton className={item.name}>
              <a className="social__btn" href={item.url} title={item.name} target="_blank">
                <Icon className="social__btn--icon" path={item.icon} />
              </a>
            </SocialButton>
          </li>
        );
      })}
      <style jsx>{`
        .social__list {
          display: flex;
          gap: 0.25rem;
          list-style: none;
          max-height: 50px;
        }

        .social__list li {
          margin-left: 1em;
        }

        .social__btn {
          color: #fff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .social__btn a {
          width: 100%;
          height: 100%;
        }

        .social__btn--icon {
          max-width: 34px;
        }
      `}</style>
    </ul>
  );
};

export default SocialNetowrks;
