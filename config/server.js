module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8083),
  url: 'https://dealdoxstrapi,pbwebvision.com/',
  app: {
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
  },
});