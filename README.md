[![CircleCI](https://circleci.com/gh/GruselhausOrganization/api.svg?style=svg)](https://circleci.com/gh/GruselhausOrganization/api) 
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

# Gruselhaus API

The Gruselhaus API provides information to several web services including a fully autonomous website reachibility tracking system with an advanced notification service.
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Documentation

Please have a look at https://api.gruselhaus.com/documentation

----

### Prerequisites
You need to install this software to meet the prerequisites.

* node.js
* npm or yarn
* A firebase real time database (http://firebase.google.com)
* An email provider && your SMTP Auth Credentials

### Installing

Here's a short guide how to install this project on your local machine:

Clone this repository
```
$ git clone git@github.com:GruselhausOrganization/api.git
```

then install the required dependecies
```
$ yarn install
```

Copy `.env.example` to `.env` and fill out the attritbutes.

## Running the tests

```
$ yarn test
```

## Start the development environment

```
$ yarn run dev
```

## Start the production environment

```
$ yarn run build-start
```

## Built With

* [Node.js](https://nodejs.org/) - Runtime Framework
* [Firebase](http://firebase.google.com) - Database
* [Heroku](https://heroku.com) - Hosting

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please run the the tests using the following command `$ yarn test` befor opening a pull request first.

## Authors

* **Nico Finkernagel** - *Initial work* - [GitHub/@Gruselhaus](https://github.com/Gruselhaus)
* **Julia Konstanz** - *Bug hunting & core contributing* - [GitHub/@juliakonstanz](https://github.com/juliakonstanz)

See also the list of [contributors](https://github.com/GruselhausOrganization/api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
