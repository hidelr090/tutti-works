export default {
  port: process.env.PORT || 3334,
  jwtSecret: process.env.JWT_SECRET || 'secret',
  hostname: process.env.SERVER_HOST || 'localhost'
}