module.exports = {
  dialect: 'mysql',
  username: process.env.DB_USERNAME || 'tutti_dev',
  password: process.env.DB_PASSWD || 'tutti123',
  database: process.env.DB_DATABASE || 'tutti_dev',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
}