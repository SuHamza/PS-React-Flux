import React, { useState } from 'react';
import CourseForm from './CourseForm';

const ManageCoursePage = props => {
    // Declare an empty course state
    const [course, setCourse] = useState({
        id: null,
        slug: '',
        title: '',
        authorId: null,
        category: ''
    });

    // onChange Handler
    function handleChange(event) {
        // Creat a copy of the course object
        // & assign the input values to that copy
        // according to the event name
        const updatedCourse = { ...course, [event.target.name]: event.target.value };
        setCourse(updatedCourse);
    }
    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange} />
        </>
    );
}

export default ManageCoursePage;