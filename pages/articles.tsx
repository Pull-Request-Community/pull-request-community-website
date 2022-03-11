import { GetStaticProps } from 'next';
import Layout from '../components/layout/layout';
import styles from '../styles/Home.module.scss';
import { getArticle, getArticleFileList, removeArticleNameExtension } from '../utils/articles';

export default function Articles({ articles }) {
  return (
    <Layout>
      <div className={styles.container}>
        {articles.map((article) => (
          <div key={article.id}>{article.title}</div>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = getArticleFileList();
  const dataList = articles.map((articleid) => ({
    id: articleid,
    ...getArticle(removeArticleNameExtension(articleid)).data,
  }));

  return {
    props: {
      articles: dataList,
    },
  };
};
