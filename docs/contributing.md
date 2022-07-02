# Contribution To The Pull Request Website

Thank you, it is not obvious that you are devoting your time to contributing to our community.
We appreciate it very much.❤️🙏🏻

Before jumping into the deep water, it's essential to discuss a bit of communication.
One of the biggest challenges on each project (especially on open-source projects) is communication.
Good communication can lead to great achievements, effective teamwork, time efficiency and make the working process fun and easy.
It is important to remember that all contributions are made voluntarily by people that devote their time and hard work. We are all part of a team, so *please be passionate and polite to each other*.

Please follow this guide to make your experience as pleasant and easy as possible.

## The Ways You Can Contribute To The Pull Request Website:

- Opening a [new issue](https://github.com/Pull-Request-Community/pull-request-community-website/issues/new) with a bug or a feature proposal.
- Add documentation for existing features.
- Improvement of our tests.
- Solving an issue or adding a new feature.

## The Preferred Way To Contribute:

1. Pick an issue from the [issues list](https://github.com/Pull-Request-Community/pull-request-community-website/issues) or [open a new issue](https://github.com/Pull-Request-Community/pull-request-community-website/issues/new) and _ask_, by writing a new comment on the issue's page, to own the task.
2. Wait for the maintainer's ownership approval. Keep in mind that they may not approve that. Like we said at the beggining, communication is everything.
3. Fork the project. For more details, please read this article: [My first contribution to open source: Make a fork of the repo / Galen Corey](https://opensource.com/article/19/11/first-open-source-contribution-fork-clone).
4. Clone the forked project to your local machine (see instructions below).
5. Try to brake the task into subtasks.
6. Open a new branch (see instructions below).
7. While working on an issue, feel free to ask any questions on the issue's page.
8. Open pull request (make sure you open the pull requset on the original project and not on the forked project).
9. Make sure all the tests are passing.
10. Merge to the _main_ branch.

## Working On Issue:

Having a clear work flow of code development can be very useful. Therefore, please work on branches that are linked to a relevant issue.
Don't you know how to connect a branch to an issue? no problem, follow this [guid](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue).

## Developing In A Branch:

Please make sure you follow this list:

1. Link your branch to the relevant issue.
2. Use meaningful names for commits.
3. Create small commits for each logic unit at a time.
4. Use a [tasks list](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-task-lists) to manage your work.

## TSX Specifications:

Please follow this functional component pattern:

```tsx
interface Props {
  prop: <type>
  ...
}

export const Component = (props: Props): ReactElement => {
  const { prop, ... } = props;
  ...
}
```

## GitHub API

In case you get an error from GitHub like this:

```json
{
  "message": "API rate limit exceeded for xxx.xxx.xxx.xxx."
}
```

you may need to add a github token to your local enviroment to increase your rate limit.

### Use Locally:

#### Setup

- first, you need to create your own [personal token](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- create `.env.local` file in the project's root
- add this line to the `.env.local` file: `GITHUB_API_KEY=<personal-token>`
- restart your local server

#### Usage

```tsx
import { getOctokit } from '<relative path>/services/github';

const octokit = getOctokit();
```

> learn more about octokit [here](https://github.com/octokit/octokit.js#octokitrest-endpoint-methods).

We hope you will have a great time contributing to this project.
