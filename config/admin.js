module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aca7a9ba8e414eaaef7ce9889a2b8dd4'),
  },
});
