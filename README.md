# mongooseExpress
- 1st express CRUD app using MongoDB (via Mongoose)
- [based on respective tutorial by Colt Steele (paid)](https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22098984)

https://github.com/Sammeeey/mongooseExpress/assets/49591562/797e476e-c6a4-4e93-b8bc-3b30f89e1748

## lessons learned (Building Node/Express App)
### installations
1. initiate npm project (potentially install requirements): `npm init -y`
2. install express: `npm install express`
3. install ejs (template language): `npm install ejs`
4. (install nodemon (if not already installed globally): `npm install -g nodemon` (so that you don't need to restart server after every edit))
5. (install bootstap (or other frontend toolkit))
6. (install express `method-override` to handle put, patch, delete, etc. methods)

### boilerplate
- setup default express app
- define express routes (`app.get()`, `app.post()`, etc.)
- create & specify path to static files: `public/css` & `public/js`
- specify which kind of data server can receive/handle: `express.urlencoded`/`express.json` (for http methods beyond GET)
- enable usage of HTTP methods beyond GET & POST (`method-override`)
- enable usage of ejs
- create & specify path to `views` (including partials;): `/views/partials`
- build ejs templates & partials (HTML/ejs)
- define & connect style sheet(s) in `public/css`
- (include/connect frontend toolkit (bootstrap, tailwind, bulma, material, ...))
- include partials in views ejs files

### handle HTTP requests
- browser can only handle GET & POST
  - use `method-override` middleware to modify query parameters of post requests in to send data via different HTTP methods (e.g. DELETE, PATCH, etc.)

### tools used
- ([hoppscotch.io](https://hoppscotch.io/) for API testing)
- [EJS](https://ejs.co/) for templating
- [expressJs](https://expressjs.com/) for routing!?
- nodemon (during development)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com)
