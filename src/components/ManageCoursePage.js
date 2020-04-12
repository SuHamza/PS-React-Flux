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
    function handleTitleChange(event) {
        // Creat a copy of the course object
        // & assign the input title to that copy
        const updatedCourse = { ...course, title: event.target.value };
        setCourse(updatedCourse);
    }
    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onTitleChange={handleTitleChange} />
        </>
    );
}

export default ManageCoursePage;