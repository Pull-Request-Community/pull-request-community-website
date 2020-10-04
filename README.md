# Pull Request Community Pages

## Adding your profile

You can add / update your personal profile by creating a Pull Request to this repo:

1. Create a new YAML file in the [people](people/) directory, and name it as your GitHub username.  
   e.g. If you GitHub user is MichalPorag, `MichalPorag.yaml`.

2. Add your photo under [public/images/people](public/images/people) in jpeg format. Use your GitHub 
   username for the image, e.g. `MichalPorag.jpg`

3. Create a pull request with the changes

## Running a development environment

### In the cloud

Open the project in [https://githubbox.com/urish/pull-request-community](CodeSandbox) to start hacking in your browser.

### Locally

First, make sure you have all the depenedencies installed by running

```bash
npm install
```

Then, run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

