import yaml from 'yaml';
import { promises as fs } from 'fs';
import { join } from 'path';

const PEOPLE_DIR = join(process.cwd(), 'people');

export interface IPerson {
  name: string;
  github: string;
  description: string;
  twitter?: string;
  facebook?: string;
}

export async function getPeople() {
  const files = await fs.readdir(PEOPLE_DIR);
  const fileData = await Promise.all(
    files
      .filter((file) => file.endsWith('.yaml'))
      .map((file) => fs.readFile(join(PEOPLE_DIR, file), 'utf-8'))
  );
  return fileData.map((content) => yaml.parse(content)) as IPerson[];
}
