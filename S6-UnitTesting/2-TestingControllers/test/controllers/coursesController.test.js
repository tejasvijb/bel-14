const coursesController = require("../../src/controllers/coursesController");
const coursesModel = require("../../src/models/coursesModel");

jest.mock("../../src/models/coursesModel");


describe("Testing Courses Controller", () => {
    
    // Nest test suite within a suite
    describe("Testing get all courses method", () => {
        it("Should return all courses", () => {
            const mockCourses = [{ _id: "1", name: "Course 1" }, { _id: "2", name: "Course 2" }];
            coursesModel.find.mockReturnValue(mockCourses);
            expect(coursesController.getAllCourse()).toBe(mockCourses);
            expect(coursesModel.find).toHaveBeenCalledTimes(1);

        });
    });
})


