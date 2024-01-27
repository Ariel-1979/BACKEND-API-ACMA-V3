module.exports = {
  PORT: process.env.PORT,
  DB: {
    BD_USER: process.env.BD_USER,
    BD_PASSWORD: process.env.BD_PASSWORD,
    BD_PORT: process.env.BD_PORT,
    BD_NAME: process.env.BD_NAME,
    BD_HOST: process.env.BD_HOST,
  },
  JWT: {
    SECRET_TOKEN: process.env.SECRET_TOKEN,
    TIME_TOKEN: process.env.TIME_TOKEN,
    COOKIES_TOKEN: process.env.COOKIES_TOKEN,
  },
};
