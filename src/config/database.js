module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  port: "5433",
  password: "docker",
  database: "gympoint",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
