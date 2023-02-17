module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfnjd64gqg415e2s7li0-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'sample_zw1p'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'RJzpcLz5BdkJRWohQsu31WNPSDaMJkmp'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
