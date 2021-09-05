import { GetStaticProps } from 'next';
import Description from '../components/description/Description';
import Layout from '../components/layout/layout';
import { PersonCard } from '../components/personCard/personCard';
import { getPeople, IPerson } from '../services/people';
import styles from '../styles/Home.module.scss';
import { randomShuffle } from '../utils/randomShuffle';
interface IHomeProps {
  people: IPerson[];
}

export default function Articles({ people }: IHomeProps) {
  return (
    <Layout>
      <div className={styles.container}>Scafolding for article page</div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      people: randomShuffle(getPeople()),
    },
  };
};
