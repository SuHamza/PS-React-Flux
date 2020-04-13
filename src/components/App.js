import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPage from './CorsesPage';
import Header from './common/Header';
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from './ManageCoursePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
    // Use React Router instead
    // function getPage() {
    //     const route = window.location.pathname;
    //     if (route === '/about') return <AboutPage />;
    //     if (route === '/courses') return <CoursesPage />;
    //     return <HomePage />;
    // }

    return (
        <div className='container-fluid'>
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header />
            {/* Only one of the routes inside Switch will match */}
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/courses' component={CoursesPage} />
                <Route path='/about' component={AboutPage} />
                {/* :slug is a URL parameter that can be declared after a colon */}
                <Route path='/course/:slug' component={ManageCoursePage} />
                <Route path='/course' component={ManageCoursePage} />
                <Redirect from='/about-page' to='about' />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );

}

export default App;