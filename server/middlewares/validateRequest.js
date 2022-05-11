const validateRequest = (schema) => async (req, res, next) => {
  // if no schema is provided, skip validation
  if (!schema) return next();

  let body;
  // if request is multipart/form-data, JSON.parse every field
  if (req.headers['content-type'] === 'multipart/form-data') {
    Object.keys(req.body).forEach((key) => {
      body[key] = JSON.parse(req.body[key]);
    });
  }
  // if request is application/json, use req.body
  else {
    body = req.body;
  }

  try {
    await schema.validate(
      {
        body,
        query: req.query,
        params: req.params,
      },
      { abortEarly: false }
    );

    // removing extra properties
    req.body = schema.cast({ body: req.body }, { stripUnknown: true }).body;
    req.query = schema.cast({ query: req.query }, { stripUnknown: true }).query;
    req.params = schema.cast(
      { params: req.params },
      { stripUnknown: true }
    ).params;

    return next();
  } catch (e) {
    return res.status(400).send(e.errors);
  }
};

module.exports = validateRequest;
