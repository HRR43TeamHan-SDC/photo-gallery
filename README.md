Project Name:
Photo Gallery Module


Installing
1. npm install
2. npm run build (for webpack)
3. npm start (for Node) -- or -- npm run start:dev (for nodemon)
4. npm run seed (from root directory for MySQL)


Endpoints
| Action | Endpoint         | Method | Description                                      |
|--------|------------------|--------|--------------------------------------------------|
| Create | /api/photos      | POST   | Create a new record of 15 photos max             |
| Read   | /api/photos/:id  | GET    | Read photos of a provided restaurant             |
| Update | /api/photos/:id  | PUT    | Swap or add photos for a provided restaurant     |
| Delete | /api/photos/:id  | DELETE | Remove a provided record from the database       |


Running tests
1. npm test