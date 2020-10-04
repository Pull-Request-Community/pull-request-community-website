import { mdiFacebook, mdiGithub, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';
import { IPerson } from '../services/people';

interface IPersonProps {
  person: IPerson;
}

export function PersonCard({ person }: IPersonProps) {
  return (
    <article>
      <h2>{person.name}</h2>
      <img src={`https://github.com/${person.github}.png?size=200`} />
      <p>{person.description}</p>
      <a href={`https://github.com/${person.github}`} target="_blank" rel="noopener noreferrer">
        <Icon path={mdiGithub} size={1.5} />
      </a>
      {person.twitter && (
        <a href={person.twitter} target="_blank" rel="noopener noreferrer">
          <Icon path={mdiTwitter} size={1.5} />
        </a>
      )}
      {person.facebook && (
        <a href={person.facebook} target="_blank" rel="noopener noreferrer">
          <Icon path={mdiFacebook} size={1.5} />
        </a>
      )}
    </article>
  );
}
