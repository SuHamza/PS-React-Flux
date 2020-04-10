import React, { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

// Convert Class component into a function
function CoursesPage() {
    // Declare state using useState Hook
    // Returns an array [ stateValue, Function to update it]
    const [courses, setCourses] = useState([]);
    // Assign the component's state to the courses received from the mock API
    // Using useEffect Hook instead of componentDidMount() method
    useEffect(() => {
        // Get courses from the API
        // When the call completes => Store the array of courses in state
        getCourses().then(_courses => setCourses(_courses));
    }, []); // The 2nd argument [] tells useEffect to run only once
    // Without the 2nd argument useEffect will run in an infinite loop

    // Render is implied in a function component
    // Whatever we return is rendered
    return (
        <>
            <h2>Courses</h2>
            <CourseList courses={courses} />
        </>
    );
}

export default CoursesPage;