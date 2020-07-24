const jwt = require("jsonwebtoken");

const roles = ["normal", "admin"];

function restrict(role) {
  return async (req, res, next) => {
    const authError = {
      message: "Invalid credentials",
    };
    const badToken = {
      message: "Bad token received",
    };

    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json(badToken);
      }

      jwt.verify(token, process.env.JWT_SECRET || "secret", (err, decoded) => {
        if (err) {
          return res
            .status(401)
            .json({ message: "Error with jwt verification" });
        }

        if (role && roles.indexOf(decoded.userRole) < roles.indexOf(role)) {
          res.status(401).json(authError);
        }

        next();
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = restrict;
