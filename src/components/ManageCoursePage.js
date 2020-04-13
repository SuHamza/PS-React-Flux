import React, { useState } from 'react';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';
import { toast } from 'react-toastify';

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
    function handleChange({ target }) {
        // Creat a copy of the course object
        // & assign the input values to that copy
        // according to the event name
        setCourse({ ...course, [target.name]: target.value });
    }

    // Save Courses
    function handleSubmit(event) {
        // Prevent the page from posting back to the server
        event.preventDefault();
        courseApi.saveCourse(course).then(() => {
            // If saved successfully
            // Redirect to Course's page
            props.history.push('/courses');
            toast.success('Course saved successfully!');
        });
    }
    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} />
        </>
    );
}

export default ManageCoursePage;