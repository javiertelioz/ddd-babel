# Service Scaffolding Clean Architecture 
> API built with Node/Express that follows DDD + Clean Architecture principles 

## Getting started (< 2mn)

```
npm install
npm test
npm start
```

In a browser, open [http://localhost:4000/api/v1/hello](http://localhost:4000/api/v1/hello).

## Domain Driven Architectures

Software design is a very difficult thing to do. For years, there has been a trend to place business logic, also known as the (business) domain, and with it the user, at the heart of the overall system. From this concept, different architectural patterns were imagined.

One of the first and foremost was presented by E. Evans in his [Domain Driven Design approach](http://dddsample.sourceforge.net/architecture.html).

![DDD Architecture](/doc/DDD_architecture.jpg)

Based on it or in the same time, other application architectures appeared like [Onion Architecture](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/) (by. J. Palermo), [Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/) (by A. Cockburn) or [Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html) (by. R. Martin).

This repository is an exploration of this type of architecture, based mainly on DDD and Clean Architecture, in a concrete and modern JavaScript application.
 
## DDD and Clean Architecture

The application follows the Uncle Bob "[Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)" principles and project structure :

### Clean Architecture layers

![Schema of flow of Clean Architecture](/doc/Uncle_Bob_Clean_Architecture.jpg)

### Project anatomy

```
  src                              → sources 
    └ application                   → Application services layer
       └ security                   → Security tools interfaces (eg: accessTokenManager.js, to generate and decode access token)
       └ use_cases                  → Application business rules 
    └ domain                        → Enterprise core business layer such as domain model objects (Aggregates, Entities, Value Objects) and repository interfaces
    └ infrastructure                → Frameworks, drivers and tools such as Database, the Web Framework, mailing/logging/glue code etc.
       └ orm                        → Database ORMs middleware (Sequelize (SQLite3,PostgreSQL), Mongoose for MongoDB)
          └ mongoose                → Mongoose client and schemas
          └ sequelize               → Sequelize client and models
          └ redis                   → Redis client
       └ repositories               → Implementation of domain repository interfaces
       └ security                   → Security tools implementations (eg: jwtAccessTokenManager)
    └ interfaces                    → Adapters and formatters for use cases and entities to external agency such as Database or the Web
       └ webserver                  → Express Web server configuration (server, routes, plugins, etc.)
          └ controllers                → Express route handlers
          └ routes                     → Express route definitions
          └ exceptions                 → Http exceptions
          └ middleware                 → Express middleware definitions (vendor and customs)
          └ server.js               → Express server definition
       └ serializers                → Converter objects that transform outside objects (eg: HTTP request payload) to inside objects (eg: Use Case request object)
 └ node_modules (generated)         → NPM dependencies
 └ test                             → Source folder for unit or functional tests
    └ index.js                         → Main application entry point
```

### Flow of Control

![Schema of flow of Control](/doc/Hapijs_Clean_Architecture.svg)

### The Dependency Rule

> The overriding rule that makes this architecture work is The Dependency Rule. This rule says that source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle. In particular, the name of something declared in an outer circle must not be mentioned by the code in the an inner circle. That includes, functions, classes. variables, or any other named software entity.
  
src. https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#the-dependency-rule

### Server, Routes, Controllers and Plugins

The server, paths, and plugins can be thought of as "plumbing code" that exposes the API to the outside world, through an instance of the Express server.

The role of the server is to intercept the HTTP request and match the corresponding path.

Routes are configuration objects whose responsibilities are to check the request format and parameters, and then call the good handler (with the received request). They are registered as add-ons(plugins).

Plugins are configuration objects that package a set of features (for example: authentication and security issues, paths, pre-handlers, etc.) and are registered at server startup.

### Controllers (Route Handlers)

Controllers are the entry points to the application context.

They have 3 main responsibilities:

1. Extract the parameters (query or body) from the request.
2. Call the good use case (application layer)
3. Returns an HTTP response (with status code and serialized data)

### Use cases

A use case is a business logical unit.

It is a class that must have an execution method that will be called by the controllers.

You can have a constructor to define your dependencies (concrete implementations - also known as _adapters_ - of the _port_ objects) or your execution context.

** Be careful! A use case should have only one precise business responsibility! **

A use case can call objects in the same layer (such as data repositories) or in the domain layer.
