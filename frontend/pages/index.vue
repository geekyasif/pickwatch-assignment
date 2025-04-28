<template>
  <div>
    <b-h level="1" text-alignment="center">
      PickWatch Full-Stack Application Technologies Used
    </b-h>
    <pre>
      Backend: 
      Koa Framework: Libaries uses - nodemon, koa-router, prisma, prisma-client, cors
      Postgres with prisma ORM 


      Backend Folder Structure:
      src: constains the modules(items) api file
      src -> items ->  items folder that contains all the routes, controller and service file
      src -> routes -> constains all the routes of modules
      primsa: contains the migration, schema, and seed file 
      constant: contains the dummy json data for testing and seeding into the db using seed.js script file
      server.js: main file that contains server related info and run the server

      Steps to run the backend:
      Postgres DB setup (docker):
      POSTGRES_PORT=5432
      POSTGRES_USER=admin
      POSTGRES_PASSWORD=test123
      POSTGRES_DB=mydb

      .env put this port and url into .env
      DATABASE_URL="postgresql://admin:test123@localhost:5432/mydb?schema=public"
      port=5001

      command to run backend:
      npm i
      npx prisma migrate dev
      npx prisma generate
      npx prisma db seed (to seed the data into the items table)
      npm run dev



      Frontend: 
      Nuxt.js
      Bootstrap

      Frontend Folder Structure:
      composables: contains useItems, and useItem file 
      useItems: fetch the items data, handle pagination and handle delete item 
      useItem: fetch the item details 

      component: 
      Default-Navbar: Navbar 
      Item-Card: Display the item display using card 
      Item-Table: Used to display the items list in the table
      Item-Table-Pagination: To handle Pagination 

      layout:
      default: used to show the navigation to all the pages 

      pages:
      index: Home Page 
      items: -> index : items page that contains the list of items and showing into the table
      items: -> [id]: created dynamic route page to fetch the data using id 

      types: contains all the typescript interface 
      utils: contains the date and time formater function 

      .env: API_URL_LOCALHOST=http://localhost:5001 (Not used any where directly used in the useItems and useItem composables because having some issues)

      Steps to run the frontend:
      npm i
      npm run dev

      Note: if your backend is running on different instead of PORT:5001 please make sure to changes the url and port into useItems and useItem composables file
    </pre>
  </div>
</template>
;
