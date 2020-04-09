import React from 'react';

function HomePage() {
    return (
        <div className='jumbotron'>
            <h1>Pluralsight Administration</h1>
            <p>React, Flux, and React Router for ultra-responsive Web Apps.</p>
            <a href="/about">About</a>
        </div>
    );
}

// React components are private by default
// Hence, we need to export them
export default HomePage;