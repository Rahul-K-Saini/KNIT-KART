import jwt from "jsonwebtoken";
const protect = async (req, res, next) => {
  try {
    const token = req.body.token;
    if (!token) {
      return res.status(401).send({
        message: "No token provided",
        success: false,
      });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        console.log(err);
        return res.send({
          message: "Auth failed",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Auth error`,
    });
  }
};

export default protect;