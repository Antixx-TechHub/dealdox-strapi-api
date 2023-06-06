module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://cms.dealdox.io/',
  app: {
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
  },
});