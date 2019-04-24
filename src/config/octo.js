const Octokit = require('@octokit/rest')
module.exports = new Octokit({
  auth: {
    username: process.env.OCTO_USERNAME,
    password: process.env.OCTO_PASSWORD
  }
});