// -----------------------------------------Imports----------------------------------------------------------
import jwt from "jsonwebtoken";
import { CustomError } from "../../Utils/Error/CustomError.js";
// ----------------------------------------------------------------------------------------------------------

export const verifyTokenMiddleware = (req, res, next) => {
  try {
    const cookies = req?.cookies;
    if (cookies && Object?.keys(cookies)?.length > 0) {
      let token = cookies?.SHIVEN_ACCESS_TOKEN;
      if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {
          if (error) {
            console.log(error.message)
            return next(new CustomError("Unauthorized User", 403));
          }
          req.userId = payload?.userId;
          return next();
        });
      } else {
        return next(new CustomError("Unauthorized User", 401));
      }
    } else {
      return next(new CustomError("Unauthorized User", 401));
    }
  } catch (error) {
    let err = new CustomError(error.message, 500);
    return next(err);
  }
};
