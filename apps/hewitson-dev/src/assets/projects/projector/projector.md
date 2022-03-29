# Overview

Projector is an on-going project to create a project management system used for small to large agile teams, built around responsive layouts and fast sprint planning cycles to optimise development.

The project uses Angular as the front-end UI, NestJS as the backend server, GraphQL as the API endpoint, Keycloak for autentication and PostgreSQL as a database. All this with the aim to be containerised using docker (PostgreSQL already runs in a container) with the aim to make this deployable with Kubernetes.

The current stages of the project are as follows:

1. Create rough DB schema using TypeGraphQL and TypeORM ✔
2. Create an initial UI, built around responsive layout; I wanted to target Desktop and mobile layouts. ✔
3. Configure auth guard for routing.
4. Create pages for the following:
   - Project Selection ✔
   - Configurable Kanban Style Board
   - Ticket Search
   - Ticket Page
   - Milestone Page
   - Project Dashboard
   - Administrative Features
5. Create administrative checks for all requests
6. Create a setup to allow for sprint planning, this could be through providing different estimates on tickets and then a project manager selecting whole will do the ticket based on an initial estimate (or something like that)

This is just a brief look at some of the features I want to include, you can see the ones I've managed to complete 'ticked' above and I hope that I can continue to expand the list of completed items.

# Some Intial Screenshots

## Desktop View

<img src="assets/projects/projector/projector_header.png" width="100%">

## Small Desktop/Tablet View

<img src="assets/projects/projector/projector_image2.png" width="100%">

## Mobile View

<img src="assets/projects/projector/projector_image3.png" width="50%">
<img src="assets/projects/projector/projector_image4.png" width="50%">

## Context Controlled Add Button

<img src="assets/projects/projector/projector_image1.png">
