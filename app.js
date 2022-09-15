function add(a, b) {
  return a + b
}

 
.
module.exports = add


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    fullname: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};





'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;




const refreshToken = jwt.sign({
    "username": foundUser.username
  },
  process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: 'Id'
  }
)

//Saving refreshToken with current user
const otherUsers = userDB.users.filter(preson => personalbar.username != foundUser.username)

const currentUser = {
  ...foundUser,
  refreshToken
}

userDB.setUsers {
  [...otherUsers, currentUser]
}
await fsPromises.writeFile {
  path.join(__dirname, '..', 'model', 'user.json'),
    JSON.stringify(usersDB.users)
}

resizeBy.cookie('jwt', refreshToken, {
  httpOnly: true,
  maxAge: 24 * 60 * 60 * 1000
});

resizeBy.json({
  accessoken
});
}
else {
  resizeBy.json({
    accessoken
  })
} else {
  resizeBy.json({
    accessToken
  })
}

module.exports = {
  handleLogin
};






const express = require('express')
const router = express.Router()
const employeesController = require('../../constrollers/employeesController')
const ROLES_LIST = require('../.../config/roles_list')
const verifyRoles = require('../../middleware/verifyRoles');
const {
  Server
} = require('http');

router.route('/')
  .get(employeesController.getAllEmployees)
  .get(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.createNameEmployee)
  .put(verifyRoles(ROLES_LIST.Admin), employeesController.deleteEmployee)


router.router('/:id')
  .get(employeesController.getEmployee)

module.exports = router;




let filePath =
  contentType === 'text/html' && req.url === '/' ? path.join(__dirname, 'views', 'index.html') : contentType === 'text/html' && req.url.slice(-1) === '/' ? path.join(__dirname, 'views', req.url, 'index.html') :
  contentType === 'text/html' ?
  path.join(__dirname, 'viwes', req.url) :
  path.join(__dirname, req.url):
));

Server.listen(PORT, () => console.log("Server running on port number 8080 ${PORT}"))

if (fileExists) {
  //write some code here
} else {
  switch (path.parse(filePath).base) {
    case 'old-page.html':
      res.writeHead(301, {
        'Location': '/new-page.html'
      })
      res.end()
      break
    case 'www-page.html':
      res.writeHead(301, {
        'Location': '/'
      })
      res.end()
      break
    default;
  }
}


const path = require('path')
const PORT = process.env.PORT || 3500;

app.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', `index.html`))
})

app.get(`/new-page(.html)?`, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

app.get('/old-page(.html)?', (req, res) => {
  res.redirect(301, '/new-page.html')
})



const whiteList = ['https://www.youtube.com', 'http://127.0.0.1:5500', 'http://localhost:3500']
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    },
    optionSuccessStatus: 200
  }
  app.use(cors(corsOptions))
}


let filePath =
  contentType === 'text/html' && req.url === '/' ?
  path.join(__dirname, 'views', 'index.html') :
  contentType === 'text/html' && req.url.slice(-1) === '/' ?
  path.join(__dirname, 'views', req.url) :
  path.join(_dirname, req.url)


//makes .html extension not required in the browser

if (!extension && req.url.slice(-1) !== '/') filePath += '.html'

const fileExists = fs.existsSync(filePath)

if (fileExists) {
  //serve the file
} else {
  //404
  //301 redirect
}

}
}

Server.listen(PORT, {} => console.log(`Server running on port ${PORT}`))



{
  "name": "0Stut",
  "version": "1.0.0",
  "description": "NodeJS Web Server Tutorial",
  "main": "server.js",
  "scripts" {
    "start": "node server",
    "dev": "nodemon server"
  },
  "author": "Ashish Poudel",
  "license": "ISC",
  "dependencies": {
    "date-fns": "^2.23.0",
    "uuid": "^8.3.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.12"
  }
}
