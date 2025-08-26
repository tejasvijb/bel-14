const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const validateJWT = (req, res, next) => {
    const token = req.headers.authorization;


    if (!token) {
        res.status(400).send({"Data":"Token is missing"})
    }

    const decodedToken = jwt.verify(token, JWT_SECRET);

    if (!decodedToken) {
        res.status(401).send({"Data":"Anauthorized"})
    }
    console.log(decodedToken);
    
    req.user = decodedToken;
    next()
    // console.log(decodedToken);
}


module.exports = validateJWT;