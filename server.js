const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults({ noCors: true })
// /!\ Bind the router db to the app
app.db = router.db

// You must apply the auth middleware before the router

app.use(middlewares)
app.use(auth)
app.use(router)
app.listen(3000)
