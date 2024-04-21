import jwt from "jsonwebtoken";
const protect = async (req, res, next) => {
  try {
    // const token = req.headers["authorization"].split(" ")[1];
    const token  = req.body.token;

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(200).send({
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