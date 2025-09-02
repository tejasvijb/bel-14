const router = require("../../src/routes/usersRoute");
const { registerUser, loginUser } = require("../../src/controllers/usersController");
const express = require('express');
jest.mock("../../src/controllers/usersController");

const request = require('supertest');

// Creating a instance of express 
const app = express();
app.use(express.json());
app.use(router);

// Creating a User
describe('User Authentication Routes', () => {

    describe('Test POST /register', () => {
        it('should successfully register a user', async () => {
            const user = {
                name: "John Doe",
                email: "john@example.com",
                password: "password123",
                role: "user"
            };

            // Mock the registerUser function to return the user object 
            registerUser.mockResolvedValue(user);

            const res = await request(app)
                            .post('/register')
                            .send(user)
                            .expect(201);
            
            // toBe v/s toEqual
            // toBe is for primitive comparison
            // toEqual is for Object comparison
            expect(res.body).toEqual(user);
            expect(registerUser).toHaveBeenCalledTimes(1);
            
        })

        it('should return an error if registration fails', async () => {
            const user = {
                name: "Jane Doe",
                email: "jane@example.com",
                password: "password123",
                role: "user"
            };

            registerUser.mockRejectedValue({message: "User registration failed"});

             const res = await request(app)
                            .post('/register')
                            .send(user)
                            .expect(500);
        })

    });





})







