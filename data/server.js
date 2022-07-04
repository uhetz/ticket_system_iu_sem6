const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)


server.use(jsonServer.bodyParser)
   server.post("/login", (req, res) => { 
    
     if ( req.body.username == "Admin"  ) { 
        var cookie = require('cookie');
        res.setHeader('Set-Cookie', cookie.serialize("login-user", req.body.username,{ expires: new Date(Date.now() + 1000*60*20) } ));
        res.sendStatus(200);
        
    } else {
        
      res.sendStatus(403);
    }
    
   })
   
   server.use(router)
   server.listen(3000, () => {
    console.log('JSON Server is running')
  })