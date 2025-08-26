const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Hashing, md5, sha1  ==> Irreversible 
// Encrypt/decypt uses a/multiple key ==> Reversible ==> Security data transmission
// Encode/decode, standard algorithms  ==> Reversible ==> transform data

const SALT_ROUNDS = process.env.SALT_ROUNDS
const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (user) => {
    user.password = bcrypt.hashSync(user.password, SALT_ROUNDS);
    const dbUser = await usersModel.create(user);
    return dbUser;
}


const loginUser = async (email, password) => {
    const body = {
        email: email, 
    };

    const dbUser = await usersModel.findOne(body);

    if (!dbUser) {
        throw new Error("User not found");
    }

    const isSamePassword = bcrypt.compareSync(password, dbUser.password);

    // const  = dbUser.password ==  hashedPassword;

    console.log("Is Same Password: ", isSamePassword);
    
    if (!isSamePassword) {
        throw new Error("Invalid Password");
    }

    const payload = {
        id: dbUser.id,
        role: dbUser.role
    }

    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '1h'})
    return {status: "ok", token };
}

module.exports = {registerUser, loginUser};