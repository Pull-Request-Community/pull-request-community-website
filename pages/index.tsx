import { GetStaticProps } from 'next';
import Head from 'next/head';
import { PersonCard } from '../components/person-card';
import { getPeople, IPerson } from '../services/people';
import styles from '../styles/Home.module.css';

interface IHomeProps {
  people: IPerson[];
}

export default function Home({ people }: IHomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>קהילת Pull Request</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          קהילת <a href="http://facebook.com/groups/pullrequest">Pull Request</a>
        </h1>

        {people.map((person) => (
          <PersonCard key={person.github} person={person} />
        ))}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      people: getPeople(),
    },
  };
};
