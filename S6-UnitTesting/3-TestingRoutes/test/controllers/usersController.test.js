const {registerUser, loginUser} = require("../../src/controllers/usersController");
const usersModel = require("../../src/models/usersModel");
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET


let mongoServer;

describe("Test user registration", () => {
    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri);
    }) 

    afterEach(async () => {
      await usersModel.deleteMany({});  
    })

    afterAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();
    });

    // Should return a user object
    // Validation
    // DB Errors 
    // Schema validation Errors

    it('should register a new user successfully with all fields', async () => {
        const user = {
            name: "John Doe",
            email: "test@example.com",
            password: "password123",
            role: "user"
        };
        // const plainTextPassword = user.password;
            
        const dbUser = await registerUser(user);

        // console.log(dbUser.password);
        // // console.log(user.password);

        expect(dbUser).toHaveProperty('_id');
        expect(bcrypt.compareSync(user.password, dbUser.password)).toBe(true);
    });



    it('should register a new user with default role', async () => {
        const user = {
            name: "John Doe",
            email: "test@example.com",
            password: "password123",
        };
            
        const dbUser = await registerUser(user);

        expect(dbUser).toHaveProperty('_id');
        expect(dbUser).toHaveProperty('role');
        expect(dbUser.role).toBe('user');
    });
})
