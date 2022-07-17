export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

export async function getUsers(): Promise<User[]> {
  const results = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = results.json();
  return users;
}
