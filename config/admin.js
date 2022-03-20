module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4ac40fbd2f8f2a2c8f07ed7987416ab6'),
  },
});
