import { verify } from 'jsonwebtoken';

const { APP_JWT_SECRET, APP_JWT_HEADER } = process.env;

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers[APP_JWT_HEADER || 'Authorization'];

  if (!token) {
    return res.status(403).send({
      message: 'A token is required for authentication',
    });
  }

  try {
    const decoded = verify(token, APP_JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send({
      message: 'Invalid Token',
    });
  }

  next();
};

export default verifyToken;
