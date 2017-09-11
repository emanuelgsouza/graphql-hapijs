# graphql-hapijs

An boilerplate for projects with Hapi and Graphql

## Usage

```sh
# clone the project
git clone https://github.com/emanuelgsouza/graphql-hapijs.git

# delete .git folder
rm -rf .git/

# Git init
git init

# Link your repository remote
git remote add [name] [url]

# push
git push [name] [branch]
```

## Undestanding src folder structure

The application live in `src` folder. Here, you find the following structure:

```txt
-- decorators/
-- domains/
-- graphql/
-- graphql-entities/
-- helpers/
-- routes/
-- strategies/
index.js
```

#### decorators folder

The decorators folder contains all the your project decorators. Do you don't know the decorations and their powers? Follow my suggestions:

+ API documentation in [here](https://hapijs.com/api#serverdecorations)
+ Medium text with examples in [here](https://medium.com/@thedon/how-to-use-hapi-decorate-3b3896045ae1)

#### domais folder

This project use DDD (Domain Drive Design).

For example, imagine that i have a user model on my database. I need implement an CRUD for it. I put in `domains/user` folder all logic for CRUD, and on *graphql resolvers* i call the methods that live in there.

#### graphql folder

In this folder you put the general graphql resolvers and types for your application. I recommend that use for root-query and root-mutation declarations.

#### graphql-entities folder

I recommend you use to declare the resolvers and types for the entities of your application

#### helpers folder

Helpers functions to application

#### router folder

Application routes

#### strategies folder

Auth strategies to your application. I've already created one for you to work with [JWT](https://jwt.io/)

## db folder

On this folder that lives your database connection.

## dotenv use

This boilerplate install [dotenv](https://github.com/motdotla/dotenv) for you. To complete information about this package, i recommend read the package documentation.
