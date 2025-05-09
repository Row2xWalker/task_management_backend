module.exports = (err, req, res, next) => {
  console.error(err);

  res.status(err.statusCode || 500).json({
    error: {
      message: err.message || 'Internal server error',
      statusCode: err.statusCode || 500
    }
  });
};