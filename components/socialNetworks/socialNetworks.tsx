import React from 'react';
import Icon from '@mdi/react';
import { mdiTelegram, mdiFacebook, mdiDiscord, mdiEmailNewsletter } from '@mdi/js';
import SocialButton from '../buttons/socialButton';
import styles from './socialNetworks.module.scss';

const SocialNetworks = () => {
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
      url: 'https://discord.gg/ZmChMVZxpU',
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
    <ul className={styles.social__list}>
      {socialLinks.map(function (item, index) {
        return (
          <li>
            <SocialButton className={item.name}>
              <a className={styles.social__btn} href={item.url} title={item.name} target="_blank">
                <Icon className={styles.social__btn__icon} path={item.icon} />
              </a>
            </SocialButton>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialNetworks;
