module.exports = ({ env }) => ({
  connection: {
    // Update your postgres credentials here
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-29.railway.app"),
      port: env.int("DATABASE_PORT", 6633),
      database: env("DATABASE_NAME", "dealdoxnew"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "1WLOa1TKV0ykghmQUiW9"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
