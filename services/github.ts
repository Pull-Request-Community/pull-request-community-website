import { Octokit } from 'octokit';

let octokit: Octokit;
/**
 * return octokit object to make all your github's api calls
 *
 * @returns {Octokit} Singleton object of octokit
 */
export const getOctokit = (): Octokit => {
  if (!octokit) {
    octokit = new Octokit({ auth: process.env.GITHUB_API_KEY || '' });
  }

  return octokit;
};
