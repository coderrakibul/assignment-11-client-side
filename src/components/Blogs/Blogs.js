import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div>
                <h4>Question 1: Difference between Javascript and NodeJS.</h4>
                <p>
                    <strong>Javascript: </strong>
                    Javascript is a Scripting Language. It's a high-level programming language. It is the updated version of ECMA Script.
                    Javascript can only be run in the browsers.
                </p>

                <p>
                    <strong>NodeJS: </strong>
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser.
                    NodeJS can run Javascript outside the browser.
                </p>
            </div>


            <div className='mt-5'>
                <h4>Question 2: When should use node js and when mongodb?</h4>
                <p>
                    <strong>NodeJS: </strong>
                    NodeJS is a javascript runtime to.
                    It's used for traditional web sites and back-end API services,

                </p>

                <p>
                    <strong>MongoDB: </strong> MongoDB is a No SQL database system. MongoDB is a general purpose database used in various ways to support applications in many different industries. When we will work in large project and many developers work together then we can use MongoDB to build project easier.
                </p>
            </div>


            <div className='mt-5'>
                <h4>Question 3: Difference between SQL and no SQL.</h4>
                <p>
                    <strong>SQL: </strong> SQL stands for Structured Query Languag. SQL database are relational. it is a table based data system.
                </p>

                <p>
                    <strong>No SQL: </strong> No SQL database are non-relational. It is document based. It can store data like javascript object.
                </p>
            </div>


            <div className='mt-5'>
                <h4>Question 4: What is the purpose of jwt and how does it work?</h4>

                <p>
                    <strong>Purpose of JWT: </strong> JWT is json web token. JWT is used for stateless authentication mechanisms for users and provider.  this means maintaining session is on the client-side instead of storing sessions on the server.
                </p>

                <p>
                    <strong>How does it work: </strong>JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p>

            </div>

        </div>
    );
};

export default Blogs;