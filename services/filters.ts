import { mdiTwitter, mdiLinkedin, mdiGithub, mdiLink, mdiFacebook } from '@mdi/js';

export const dropdownData = [
  {
    placeholder: 'סושיאל',
    data: [
      {
        name: {
          english: 'twitter',
          hebrew: 'טוויטר',
        },
        icon: mdiTwitter,
        checked: false,
      },
      {
        name: {
          english: 'github',
          hebrew: 'גיטהאב',
        },
        icon: mdiGithub,
        checked: false,
      },
      {
        name: {
          english: 'linkedin',
          hebrew: 'לינדאין',
        },
        icon: mdiLinkedin,
        checked: false,
      },
      {
        name: {
          english: 'facebook',
          hebrew: 'פייסבוק',
        },
        icon: mdiFacebook,
        checked: false,
      },
      {
        name: {
          english: 'website',
          hebrew: 'אתר אישי',
        },
        icon: mdiLink,
        checked: false,
      },
    ],
  },
];
