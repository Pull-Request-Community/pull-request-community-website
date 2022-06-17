import { GetStaticProps } from 'next';
import Layout from '../components/layout/layout';
import { getPeople, IPerson } from '../services/people';
import { randomShuffle } from '../utils/randomShuffle';
interface IHomeProps {
  people: IPerson[];
}

export default function Articles({ people }: IHomeProps) {
  return (
    <Layout>
      <div>Scafolding for article page</div>
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
