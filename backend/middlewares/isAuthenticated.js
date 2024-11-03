import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid Token",
        success: false,
      });
    }
    req.id = decode.userId;
    //If authentication is successful,
    //next() allows the request to continue to the next middleware
    //or route handler.
    // console.log("Authenticated User ID:", req.id); // Debugging line
    next();
  } catch (error) {
    console.log(error);
  }
};

//export default is used to export a single value or function
//from a module as the default export, allowing other modules to
//import it without using curly braces.

//When another module imports it, they can give it any name they want.
export default isAuthenticated;
