# Fullstack Items App

**Koa.js (backend)**, **Nuxt.js (frontend)**, **PostgreSQL**, and **Prisma ORM**.

---

## Backend

### Tech Stack:

- **Framework**: Koa.js
- **Libraries**: `nodemon`, `koa-router`, `prisma`, `@prisma/client`, `cors`
- **Database**: PostgreSQL (managed via Prisma ORM)

### Folder Structure:

```
src/
  items/           # Items module (routes, controller, service)
  routes/          # All module routes
prisma/             # Prisma migrations, schema, and seed files
constant/           # Dummy JSON data for seeding
server.js           # Entry point (server setup and configuration)
```

### Setup Instructions:

1. **PostgreSQL Setup (using Docker):**

   ```
   POSTGRES_PORT=5432
   POSTGRES_USER=admin
   POSTGRES_PASSWORD=test123
   POSTGRES_DB=mydb
   ```

   Start a PostgreSQL container or set up a local instance using these credentials.

2. **Environment Variables (`.env`):**

   ```
   DATABASE_URL="postgresql://admin:test123@localhost:5432/mydb?schema=public"
   PORT=5001
   ```

3. **Installation & Running the Server:**
   ```bash
   npm install
   npx prisma migrate dev
   npx prisma generate
   npx prisma db seed   # Seed initial data into `items` table
   npm run dev          # Start the development server
   ```

---

## Frontend

### Tech Stack:

- **Framework**: Nuxt.js
- **Styling**: Bootstrap

### Folder Structure:

```
composables/
  useItems.js       # Fetch items, handle pagination, delete item
  useItem.js        # Fetch single item details

components/
  Default-Navbar.vue
  Item-Card.vue
  Item-Table.vue
  Item-Table-Pagination.vue

layout/
  default.vue       # Common navigation layout

pages/
  index.vue         # Home Page
  items/
    index.vue       # Items listing page
    [id].vue        # Dynamic page for single item details

types/
  # TypeScript interfaces

utils/
  # Date and time formatter function

.env
  API_URL_LOCALHOST=http://localhost:5001
```

### Setup Instructions:

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

### Important Note:

- If your backend is running on a different port other than `5001`, make sure to update the API URL manually inside the `useItems` and `useItem` composable files.

---

## Quick Commands Summary

### Backend:

```bash
npm install
npx prisma migrate dev
npx prisma generate
npx prisma db seed
npm run dev
```

### Frontend:

```bash
npm install
npm run dev
```

---

## Author

Feel free to modify and extend this project!
