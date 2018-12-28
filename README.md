# Node-Express-PostgreSQL Project   ![Version][version-image]

![Linux Build][linuxbuild-image]
![Windows Build][windowsbuild-image]
![NSP Status][nspstatus-image]
![Test Coverage][coverage-image]
![Dependency Status][dependency-image]
![devDependencies Status][devdependency-image]

The quickest way to get start with Node.Js & Express, just clone the project:

```bash
$ git clone https://github.com/arjunkhetia/Node.Js-Express-Project.git
```

Install dependencies:

```bash
$ npm install
```

Start Express.js app at `http://localhost:3000/`:

```bash
$ npm start
```

# Nodemon

Nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.

Start Express.js app with nodemon at `http://localhost:3000/`:

```bash
$ nodemon bin/www
```

# Logger - Morgan & Winston

Morgan - HTTP request logger middleware for node.js:

```js
var logger = require('morgan');
app.use(logger('dev'));
```

Winston - is designed to be a simple and universal logging library with support for multiple transports:

```js
var logger = require('winston');
```

# Rotating File Stream

To provide an automated rotation of Express/Connect logs or anything else that writes to a log on a regular basis that needs to be rotated based on date.

```js
var rfs    = require('rotating-file-stream');
var stream = rfs('file.log', {
    size:     '10M', // rotate every 10 MegaBytes written
    interval: '1d',  // rotate daily
    compress: 'gzip' // compress rotated files
});
```

# PostgreSQL Database Connectivity (with connection pool)

Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings. A Connection Pool is a cache of database connections maintained by your driver so that connections can be re-used when new connections to the database are required.

```js
var pg = require('pg');
var pool = new pg.Pool({
  host: '127.0.0.1', // The hostname of the database you are connecting to. (Default: localhost)
  port: 5432, // The port number to connect to. (Default: 5432)
  user: 'postgres', // The PostgreSQL user to authenticate as.
  password: 'postgres', // The password of that PostgreSQL user.
  database: 'postgresqlDB', // Name of the database to use for this connection.
  ssl: false, // Enable TLL/SSL connections to your PostgreSQL server as long as the server is configured to support it.
  max: 10, // The maximum number of connections to create at once. (Default: 10)
  min: 1, // The minimum number of connections to create at once.
  idleTimeoutMillis: 1000, // Number of milliseconds a client must sit idle in the pool and not be checked out before it is disconnected from the backend and discarded. (Default: 1000)
  connectionTimeoutMillis: 1000 // Number of milliseconds to wait before timing out when connecting a new client. (Default: 0)
});
```

[version-image]: https://img.shields.io/badge/Version-1.0.0-orange.svg
[linuxbuild-image]: https://img.shields.io/badge/Linux-passing-brightgreen.svg
[windowsbuild-image]: https://img.shields.io/badge/Windows-passing-brightgreen.svg
[nspstatus-image]: https://img.shields.io/badge/nsp-no_known_vulns-blue.svg
[coverage-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[dependency-image]: https://img.shields.io/badge/dependencies-up_to_date-brightgreen.svg
[devdependency-image]: https://img.shields.io/badge/devdependencies-up_to_date-yellow.svg
