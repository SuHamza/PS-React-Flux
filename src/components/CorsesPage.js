import React from 'react';
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
    // Initializa a state without using a constructor
    state = {
        courses: []
    };
    // Assign the component's state to the courses received from the mock API
    componentDidMount() {
        // Get courses from the API
        // When the call completes => Store the array of courses in state
        getCourses().then((courses) => {
            this.setState({ courses: courses });
        });
    }
    render() {
        return (
            <>
                <h2>Courses</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author ID</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // Iterate over the courses array and
                            // return each course's info
                            this.state.courses.map(course => {
                                return (
                                    <tr key={course.id}>
                                        <td>{course.title}</td>
                                        <td>{course.authorId}</td>
                                        <td>{course.category}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </>
        );
    }
}

export default CoursesPage;