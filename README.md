# **Photo Gallery Module**

![Photo Gallery Module](photo-gallery.jpeg)

React | Node | Express | MongoDB | AWS | New Relic


Scaled service-oriented architecture—10 million records for four microservices delivered by proxy server
- Inherited legacy codebase; scaled 100 records to 10M; reduced database lookups from many to one
- Sustained 0% error rate during 1,000 RPS stress test with Artillery, New Relic, and Loader via proxy
- Deployed proxy and microservice AWS EC2 instances; scored 100 on Google PageSpeed Insights
- Decreased time to first byte by 66% with compression and streaming implementation

## Installing
1. npm install
2. npm run build (for webpack)
3. npm start (for Node) -- or -- npm run start:dev (for nodemon)
4. npm run seed (from root directory for MySQL)


## Endpoints

| Action | Endpoint         | Method | Description                                      |
|--------|------------------|--------|--------------------------------------------------|
| Create | /api/photos      | POST   | Create a new record of 15 photos max             |
| Read   | /api/photos/:id  | GET    | Read photos of a provided restaurant             |
| Update | /api/photos/:id  | PUT    | Swap or add photos for a provided restaurant     |
| Delete | /api/photos/:id  | DELETE | Remove a provided record from the database       |


## Running tests
1. npm test