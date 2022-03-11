import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const articlesFolder = '/articles';
const nameExtension = '.mdx';

export function getArticleFileList() {
  const articlePath = path.join(process.cwd(), articlesFolder);
  const articleList = fs.readdirSync(articlePath);

  return articleList;
}

export function getArticle(articleid: string) {
  let postFile;
  try {
    const postPath = path.join(process.cwd(), articlesFolder, `/${articleid}${nameExtension}`);
    postFile = fs.readFileSync(postPath, 'utf-8');
  } catch {
    return { content: '', data: {} };
  }

  return matter(postFile);
}

export function removeArticleNameExtension(name: string) {
  return name.replace(nameExtension, '');
}
