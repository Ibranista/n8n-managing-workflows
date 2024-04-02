
## Description

[N8N](https://github.com/nestjs/nest) managing workflows with n8n
We can create a base workflow that can be shared among different users. Each user will have it's own instance of this workflow. Then the users can build on the top of that workflow and add their own nodes. And if there are nodes that are not present in the base workflow, they can add them as well. This implementation will allow users to create their own workflows and share them with others aswell as modify workflows with out interacting with the N8N platform itself.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
## Application Usage

```bash
# Creating Credentials
https://localhost:3000/credentials

required: 
          headers :{
            accept,
            X-N8n-API-KEY
          }

          body:{
            name,
            type,
            data
          }

# Getting Workflows      
https://localhost:3000/workflows

# Creating Workflows
https://localhost/workflows
required: 
          headers :{
            accept,
            X-N8n-API-KEY
          }

# Getting Credentials Structure
https://localhost/credentials/schema/:type
required: 
          headers :{
            accept,
            X-N8n-API-KEY
          }
```          
## License

Nest is [MIT licensed](LICENSE).
