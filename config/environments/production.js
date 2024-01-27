module.exports = {
    PORT: process.env.PORT_PRODUCTION,
    DB: {
      BD_USER: process.env.BD_USER_PRODUCTION,
      BD_PASSWORD: process.env.BD_PASSWORD_PRODUCTION,
      BD_PORT: process.env.BD_PORT_PRODUCTION,
      BD_NAME: process.env.BD_NAME_PRODUCTION,
      BD_HOST: process.env.BD_HOST_PRODUCTION,
    },
    JWT: {
      SECRET_TOKEN: process.env.SECRET_TOKEN,
      TIME_TOKEN: process.env.TIME_TOKEN,
      COOKIES_TOKEN: process.env.COOKIES_TOKEN,
    },
  };
  