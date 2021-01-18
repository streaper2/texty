module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    url:'/dashboard',
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7d8b98b835d643c23b3587eac6cb7a9a'),
    },
  },
});
