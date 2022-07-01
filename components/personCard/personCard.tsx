import { useMemo, useRef } from 'react';
import {
  mdiFacebook,
  mdiGithub,
  mdiLinkedin,
  mdiTwitter,
  mdiWeb,
  mdiStackOverflow,
  mdiMastodon,
} from '@mdi/js';
import Icon from '@mdi/react';
import { IPerson } from '../../services/people';
import styles from './personCard.module.scss';
import colors from '../../styles/colors';
import ShowMore from '../showMore/showMore';
import Label from '../label/label';

interface IPersonProps {
  person: IPerson;
}

export function PersonCard({ person }: IPersonProps) {
  const card = useRef<HTMLDivElement>(null);
  const {
    name,
    description,
    github,
    linkedin,
    facebook,
    twitter,
    website,
    mastodon,
    stackoverflow,
    themeColor,
    roles,
    customImage,
  } = person;
  const theme = useMemo(() => themeColor ?? colors.secondary_color, [themeColor]);
  const icons = useMemo(
    () => [
      { link: github, icon: mdiGithub },
      { link: linkedin, icon: mdiLinkedin },
      { link: twitter, icon: mdiTwitter },
      { link: facebook, icon: mdiFacebook },
      { link: website, icon: mdiWeb },
      { link: mastodon, icon: mdiMastodon },
      { link: stackoverflow, icon: mdiStackOverflow },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [person]
  );

  // @ts-ignore
  const onToggleCard = () => card?.current?.classList.toggle(styles.card__open);

  return (
    <div ref={card} className={styles.card} style={{ borderBottomColor: theme }}>
      <div
        className={styles.card__img}
        style={{
          backgroundImage: customImage
            ? `url(images/people/${github}.jpeg)`
            : `url(https://github.com/${github}.png)`,
        }}
      />
      <div className={styles.card__content}>
        {roles && (
          <div className={styles.card__labelWrapper}>
            {roles.map((role, i) => (
              <Label key={role + i} type={role}>
                {role}
              </Label>
            ))}
          </div>
        )}
        <div className={styles.card__texts}>
          <p className={styles.card__headline}>{name}</p>
          <ShowMore
            text={description}
            maxCharacter={150}
            mobileMaxCharacter={40}
            defaultShowMoreMode={true}
            className={styles.card__desc}
            onCustomClick={onToggleCard}
          />
        </div>
        <div className={styles.card__icons}>
          {icons.map(
            ({ link, icon }) =>
              link && (
                <a
                  target="_blank"
                  key={link}
                  href={link.startsWith('https://') ? link : `https://github.com/${link}`}
                  rel="noreferrer"
                >
                  <Icon className="icon" path={icon} style={{ color: theme }} />
                </a>
              )
          )}
        </div>
      </div>
    </div>
  );
}
