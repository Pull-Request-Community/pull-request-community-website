import metaData from '../static/metadata';

export const getMetaData = (route: string): MetaData => {
  let meta: MetaData = metaData['/'];

  try {
    meta = (metaData as { [route: string]: MetaData })[route] ?? meta;
  } catch (e) {
    console.error(e);
  }

  return meta;
};

interface MetaData {
  title?: string;
  metaContents?: object[];
}
