const usersController = require("../../src/controllers/coursesController");
const usersModel = require("../../src/models/coursesModel");

jest.mock("../../src/models/coursesModel");


describe("Testing Courses Controller", () => {
    
    it("Dummy", () => {
        
    })

    // Nest test suite within a suite
    // describe("Testing get all courses method", () => {
    //     it("Should return all courses", () => {
    //         const mockCourses = [{ _id: "1", name: "Course 1" }, { _id: "2", name: "Course 2" }];
    //         coursesModel.find.mockReturnValue(mockCourses);
    //         expect(coursesController.getAllCourse()).toBe(mockCourses);
    //         expect(coursesModel.find).toHaveBeenCalledTimes(1);

    //     });
    // });

    // 1. should return a course
    // 2. It should throw an error if course not found / DB errors

    // describe("Testing get a courses method", () => {
    //     it("Should return a specific course", () => {
    //         const mockCourse = { _id: 1, name: "Course 1" };
    //         coursesModel.findById = jest.fn().mockImplementation((id) => {
    //             return id == 1 ? mockCourse : null;
    //         })
            
    //         expect(coursesController.getACourse(1)).toBe(mockCourse);
    //         // expect(coursesModel.findById).toHaveBeenCalledTimes(1);
    //         // expect(coursesModel.findById).toHaveBeenCalledWith(1);
        
    //     });

    //     it("Should throw an error if course is not found", () => {
    //         const mockCourse = { _id: 1, name: "Course 1" };
    //         coursesModel.findById = jest.fn().mockImplementation((id) => {
    //             throw new Error("Course not found");
    //         })
            
    //         expect(() => coursesController.getACourse(99)).toThrow("Course not found");
    //         // expect(coursesModel.findById).toThrow(/not found/);
    //         expect(coursesModel.findById).toHaveBeenCalledWith(99);
    //         expect(coursesModel.findById).toHaveBeenCalledTimes(1);
    //     });

    // });




})


