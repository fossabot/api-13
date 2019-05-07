[![CircleCI](https://circleci.com/gh/GruselhausOrganization/api.svg?style=svg)](https://circleci.com/gh/GruselhausOrganization/api) [![Greenkeeper badge](https://badges.greenkeeper.io/GruselhausOrganization/api.svg)](https://greenkeeper.io/)
## Current Endpoints
 * `/`: Currently redirecting to this repository
 * `/github`: Currently redirecting to this repository
 * `/status/:key/:host`
   * `key`: API Key stored in a firebase real time database for authentication
   * `host`: The host for which the user wants the uptime status
 * `/ping`: this webservice will respond with `{
    status: 200,
    message: "Pong!"
  }` if this webservice is fully working