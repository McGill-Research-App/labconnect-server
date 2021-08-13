const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: 'localhost',
    user: 'admin',
    password: '',
    database: 'labconnect',
    waitForConnections: true,
    connectionLimit: env.DB_CONN_LIMIT || 2,
    queueLimit: 0,
    debug: env.DB_DEBUG || false,
    port: 3306
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

export default config;