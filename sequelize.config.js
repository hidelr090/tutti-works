module.exports = {
  dialect: 'postgres',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWD || 'tutti123',
  database: process.env.DB_DATABASE || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
}