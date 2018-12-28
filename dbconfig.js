var pg = require('pg');

var pool = new pg.Pool({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'postgresqlDB',
  ssl: false,
  max: 10,
  min: 1,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 1000
});

var connectCount = 0;
pool.on('connect', client => {
  connectCount++;
  console.log('Acquires a client: ' + connectCount + ' from the pool.');
});

var acquireCount = 0;
pool.on('acquire', function (client) {
  acquireCount++;
  console.log('Client: ' + acquireCount + ' is checked out from the pool.');
  console.log(pool.waitingCount + ' requests waiting on a client queue.');
});

var removeCount = 0;
pool.on('remove', function (client) {
  removeCount++;
  console.log('Client: ' + removeCount + ' is removed from the pool.');
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client: ', err);
  process.exit(-1);
});

module.exports.isLive = () => {
  pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.log("Unable to connect PostgreSQL...");
      process.exit(1);
    } else {
      console.log("PostgreSQL Database connected..."+'\n');
    }
  });
}

module.exports.query = (querytext, queryparams) => {
  return pool.query(querytext, queryparams);
}

module.exports.close = () => {
  if(pool.waitingCount === 0) {
    pool.end();
  }
}
