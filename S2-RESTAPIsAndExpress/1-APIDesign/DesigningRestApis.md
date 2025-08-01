Building a course rating service
* Create a course
* Get all courses
* Get a course by Id
* Update a course           ==> PATCH
* Replace a course          ==> PUT
* get average ratings of a course
* Rate a course

Resource: Course
Application Context: courses-service 
version: v1

1. Creating a course
POST         /courses
body: CoursesObject  

2. Get all courses
GET /courses

3. Get a course by Id
GET /courses/{id}

4. Update a course
PATCH /courses/{id}
UpdateCourseObject

PUT /courses/
body: Array of courses

PUT v/s Patch


5. Get average ratings of a course
GET /courses/{id}/ratings       ==> Decently good API end point
GET /courses/{id}/ratings?type=avg
GET /courses/{id}/average-ratings


GET /courses/{id}/ratings ==> Meaningless

Get /Cources/Rating

5.1 GET /ratings/{courseId}

5.1 GET /ratings?courseId={courseId}

Get /courses then we can find average ==> Very costly (implicit undrstanding that rating is embeddedin the course)
GET /courses/id/ratings



