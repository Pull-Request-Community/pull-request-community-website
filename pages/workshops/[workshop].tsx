import styles from '../../styles/Workshop.module.scss';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';

const mentorCurrentData = [
  {
    img: 'mentor pic',
    name: 'mentor name',
    library: 'library name',
  },
  {
    img: 'mentor pic',
    name: 'mentor name',
    library: 'library name',
  },
  {
    img: 'mentor pic',
    name: 'mentor name',
    library: 'library name',
  },
  {
    img: 'mentor pic',
    name: 'mentor name',
    library: 'library name',
  },
];

export default function Workshop({}) {
  const { query } = useRouter();
  console.log(query);

  return (
    <Layout>
      <div className={styles.workshop}>
        <Container className={styles.workshop_container}>
          <p>
            <b>שימו לב!</b>
          </p>
          <p>אי אפשר להירשם לשתי סדנאות במקביל</p>
          <p>עוד טקסט .......</p>

          <div className={styles.workshop_mentors}>
            {mentorCurrentData?.map(({ img, name, library }) => (
              <div key={name + library}>
                <p>{img}</p>
                <p>{name}</p>
                <p>{library}</p>
              </div>
            ))}
          </div>
        </Container>
        <Container className={styles.workshop_container}>
          <h1>Form Container</h1>
        </Container>
      </div>
    </Layout>
  );
}
