import { GetStaticProps } from 'next';
import { useState } from 'react';
import Filter from '../components/filter/filter';
import Layout from '../components/layout/layout';
import { PersonCard } from '../components/personCard/personCard';
import { getPeople, IPerson } from '../services/people';
import styles from '../styles/Home.module.scss';
import { randomShuffle } from '../utils/randomShuffle';
import { dropdownData } from '../services/filters';

interface IHomeProps {
  people: IPerson[];
}

export default function Home({ people }: IHomeProps) {
  const [data, setData] = useState(dropdownData);
  const filterArray = data.map((element) => {
    return element.data.flatMap((entry) => (entry.checked ? entry.name.english : []));
  });

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.cards__wrapper}>
          <Filter dropdownData={data} setDropdownData={setData} />
          {people
            .filter((person) =>
              filterArray[0].every((filter) => Object.keys(person).includes(filter))
            )
            .map((person, i) => (
              <PersonCard key={person.name + i} person={person} />
            ))}
        </div>
      </div>
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
