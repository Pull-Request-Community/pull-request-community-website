import React, { useEffect } from 'react';
import Layout from '../../../components/layout/layout';
import ProjectPage from '../../../components/projectPage/projectPage';
import { GetServerSideProps } from 'next';
import { getOctokit } from '../../../services/github';

const octokit = getOctokit();

function project(props) {
  const projectFullInfo = {
    stars: props.stars,
    license: props.license,
    languages: props.langarr,
    projectname: props.projectname,
  };

  return (
    <>
      <Layout descriptionText={ProjectPage(projectFullInfo)} />
    </>
  );
}

export default project;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { owner, repo } = context.params;
  let repoInfo;
  let langInfo;

  try {
    const data = await octokit.rest.repos.get({ owner: owner as string, repo: repo as string });
    const Langdata = await octokit.rest.repos.listLanguages({
      owner: owner as string,
      repo: repo as string,
    });
    repoInfo = data.data;
    langInfo = Langdata.data;
  } catch {
    // In case of an error, display the 404 page to the user.
    return {
      notFound: true,
    };
  }

  function formatStars(stars) {
    if (stars >= 10000) {
      return `${Math.floor(stars / 1000)}k`;
    }

    if (stars >= 1000) {
      return Math.floor((stars % 1000) / 100) === 0
        ? `${Math.floor(stars / 1000)}k`
        : `${(stars / 1000).toFixed(1)}k`;
    }
    return stars.toString();
  }

  const langarr = [];
  for (const lang in langInfo) {
    const obj = {};
    obj[lang] = langInfo[lang];
    console.log(obj);

    langarr.push(obj);
  }
  langarr.sort((a, b) => b[Object.keys(b)[0]] - a[Object.keys(a)[0]]);

  if (langarr.length > 3) {
    langarr.length = 3;
  }

  const stars = formatStars(repoInfo.stargazers_count);
  const license = repoInfo?.license?.name || '';

  return {
    // Will be passed to the page component as props.
    props: { stars, license, langarr, projectname: repo as string },
  };
};
