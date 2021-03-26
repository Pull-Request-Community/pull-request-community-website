export interface IPerson {
  name: string;
  github: string;
  description: string;
  twitter?: string;
  facebook?: string;
  website?: string;
  stackoverflow?: string;
  linkedin?: string;
  themeColor?: string;
  roles?: string[];
  customImage?: boolean;
}

export function getPeople() {
  const peopleContext = (require as any).context('../people', true, /\.json/);

  return peopleContext.keys().map(peopleContext) as IPerson;
}
