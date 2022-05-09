import React from 'react';

const Blogs = () => {
    return (
        <div className='p-3'>
            <h3>when should we use node js ? & when should you use mongodb?</h3>
            <p><h6>Node js:</h6>
                Because of its single-threaded nature, Node. js is best suited for non-blocking, event-driven servers. It was created with real-time, push-based architectures in mind and is utilized for standard web sites and back-end API applications.
               <h6>Mongodb:</h6>
                MongoDB is a general-purpose database that is used in a variety of industries to support applications (e.g., telecommunications, gaming, finances, healthcare, and retail). Because it tackles long-standing difficulties in data management and software development, MongoDB has found a home in a variety of enterprises and roles.</p>
            <h3>What is the purpose of jwt and how does it work?</h3>
            <p>JSON Web Token, or jWT, is an open standard for exchanging security information between two parties: a client and a server. JSON items, containing a set of claims, are encoded in each JWT. JWTs use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued.JWTs are unique among web tokens in that they include a set of claims. Claims are a type of communication between two parties. The nature of these claims is determined by the use case at hand. A claim could specify who issued the token, how long it is valid, or what permissions the client has been given.</p>
            <h3>Difference between javascript and nodejs</h3>
            <p> <li>
            JavaScript is a simple programming language that runs on the JavaScript Engine in any browser. While Node JS is an interpreter or runtime environment for the JavaScript programming language, it requires libraries that can be easily accessible from JavaScript programming to make it more useful.
            </li>
            <li>
            For one online application, JavaScript is typically utilized for any client-side activities. An activity could be dealing with business validation, dynamic page display at a set time interval, or a simple Ajax request. For every web application, these are used for the maximum amount of time. Node JS, on the other hand, is mostly used for non-blocking operations on any operating system. Non-blocking operations on an operating system include writing or executing a shell script, retrieving specified hardware-related information in a single call, obtaining installed certificate data on the system, and doing a large number of defined tasks.</li> <li>
              JavaScript may run on any engine, including FireFox's Spider Monkey, Safari's JavaScript Core, and V8 (Google Chrome). As a result, JavaScript programming is incredibly simple to create, and any running environment is equivalent to a full browser. Node JS, on the other hand, only supports the V8 engine, which is unique to Google Chrome. However, written JavaScript code can run in any environment, regardless of whether it supports the V8 engine. As a result, there are no browser-specific constraints.   </li>
            </p>
        </div>
    );
};

export default Blogs;