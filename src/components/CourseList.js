import React from 'react';
import PropTypes from 'prop-types';

function CourseList(props) {
    return (
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
                    props.courses.map(course => {
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
    );
}
// PropTypes only throws errors in development mode
CourseList.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            authorId: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired
        })).isRequired
};

export default CourseList;