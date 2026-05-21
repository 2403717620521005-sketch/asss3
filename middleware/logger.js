const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}]  REQUEST METHOD: ${req.method}  |  URL: ${req.url}`);
  next();
};

module.exports = logger;
