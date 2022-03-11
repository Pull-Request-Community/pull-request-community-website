import { marked } from 'marked';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/layout';
import { getArticle, getArticleFileList, removeArticleNameExtension } from '../../utils/articles';

export default function Article({ content, data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const articleNames = getArticleFileList();

  return {
    paths: articleNames.map((path) => {
      return { params: { articleid: removeArticleNameExtension(path) } };
    }),
    fallback: true,
  };
}

export const getStaticProps = async ({ params }) => {
  const { content, data } = getArticle(params.articleid);

  return {
    props: {
      content,
      data,
    },
  };
};
