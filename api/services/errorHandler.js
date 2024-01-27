class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleErrors = (err, req, res, next) => {
  console.error(err);

  let statusCode = 500;
  let message = 'Internal Server Error';

  if (err.code === 'ER_DUP_ENTRY') {
    statusCode = 400;
    message = 'Duplicate entry';
  } else if (err.code === 'ER_NO_SUCH_TABLE') {
    statusCode = 404;
    message = 'Table not found';
  }

  res.status(statusCode).json({ error: message });
};

export default handleErrors;
