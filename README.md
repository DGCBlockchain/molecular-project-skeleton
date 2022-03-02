[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)
[![Tests](https://github.com/DGCBlockchain/molecular-project-skeleton/actions/workflows/test.yml/badge.svg)](https://github.com/DGCBlockchain/molecular-project-skeleton/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/DGCBlockchain/molecular-project-skeleton/branch/main/graph/badge.svg?token=5PA9DQ0HU0)](https://codecov.io/gh/DGCBlockchain/molecular-project-skeleton)
# Molecular-Project-Skeleton
This is a [Moleculer](https://moleculer.services/)-based microservices project. Generated with the [Moleculer CLI](https://moleculer.services/docs/0.14/moleculer-cli.html).

## Usage
Start the project with `npm run dev` command. 
After starting,

Default dev API url http://localhost:3000/api/ for local testing. 
The skeleton project has the following services


## Services
- **api**: API Gateway services
- **auth**: Sample service with `login` and `resolve` actions.
- **users**: Sample service  with 
  - `me` action to get infomation about a logged in  and authenticated user
  - `updateSelf` action allows authenticated user to update his information
  - `list` action returns a list of users
- **register**: Sample service with `signup` action to register new users.
- **projects**: Sample service

## Mixins
- **db.mixin**: Database access mixin for services. Based on [moleculer-db](https://github.com/moleculerjs/moleculer-db#readme)


## Useful links

* Moleculer website: https://moleculer.services/
* Moleculer Documentation: https://moleculer.services/docs/0.14/

## NPM scripts

- `npm run dev`: Start development mode (load all services locally with hot-reload & REPL)
- `npm run start`: Start production mode (set `SERVICES` env variable to load certain services)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run lint`: Run ESLint
- `npm run ci`: Run continuous test mode with watching
- `npm test`: Run tests & generate coverage report
- `npm run dc:up`: Start the stack with Docker Compose
- `npm run dc:down`: Stop the stack with Docker Compose

## forking this repo
Fork this repo for your projects and set the following repo secrets in the new repo
- `CODECOV_TOKEN`: used by coverage workflow to upload coverage report
- `PROJECT_ID`: used by docker worfklow, it is project id for your gcr
- `GCR_DEVOPS_SERVICE_ACCOUNT_KEY`: service account key that  grants access to your private gcr

## coverage 
Default test coverage threshold for this template is set to 75%. This can be adjusted in the .codecov.yml file 
