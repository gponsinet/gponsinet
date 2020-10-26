import { Octokit } from '@octokit/rest'
const octokit = new Octokit()

async function main({ env }) {
  const repos = await octokit.repos.listForUser({
    username: 'gponsinet',
    private: true,
    auth: '46c5e680510eaf911b02f14ab2e8d41fe6e6bc1b',
  })
  
  console.log(repos.data.map(_ => _.name))
}

main(process)
