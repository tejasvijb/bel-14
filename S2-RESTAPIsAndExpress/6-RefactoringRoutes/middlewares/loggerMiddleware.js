
const logger = (req, res, next) =>  {
    console.log(`${req.method}: Reqest received on ${req.url}. Logger via Middleware`);
    next();
}

const logger1 = {
    name: "Jay"
}



module.exports = {
    logger: logger,
    xyz: logger1
}