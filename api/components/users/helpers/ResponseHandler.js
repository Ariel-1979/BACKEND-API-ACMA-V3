const responseSuccess = (res, statusCode, data) => {
	res.status(statusCode).json({
		data
	});
};
const responseError = (res, statusCode, message) => {
	res.status(statusCode).json({
		data: null,
		message,
		error: true
	});
};

export { responseSuccess, responseError };
