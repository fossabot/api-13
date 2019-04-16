[![CircleCI](https://circleci.com/gh/GruselhausOrganization/api.svg?style=svg)](https://circleci.com/gh/GruselhausOrganization/api) [![Greenkeeper badge](https://badges.greenkeeper.io/GruselhausOrganization/api.svg)](https://greenkeeper.io/)
## Current Endpoints
 * `/`: Currently redirecting to this repository
 * `/github`: Currently redirecting to this repository
 * `/status/:token/:host`
   * `token`: Api Key stored in a firebase real time database for authentication
   * `host`: The host which the user wants the uptime status
 * `/ping`: the webservice will respond with `{
    status: 200,
    message: "Pong!"
  }` if this webservice is fully working
 * `/keys/:key`: database read action. Will respond with all keys currently stored in the database