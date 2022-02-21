const mssql = require("mssql");
require("dotenv").config();

const config = {
  server: process.env.server,
  Student: process.env.Student,
  database: process.env.database,
  password: process.env.password,
  options: {
    encrypt: false,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

mssql
  .connect(config)
  .then((pool) => {
    if (pool.connecting) {
      console.log("Database connecting..");
    }

    if (pool.connected) {
      console.log("Database connected");
    }
  })
  .catch((error) => {
    console.log(error);
  });
