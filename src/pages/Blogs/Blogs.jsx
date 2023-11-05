

const Blogs = () => {
    return (
        <div>
            <h2 className="text-3xl text-blue-400 mt-4
            mb-2">
                1. What is an access token and refresh token? How do they work and where should we
                store them on the client-side?
            </h2>
            <br />
            <p className="mb-6 ml-4 text-xl font-semibold text-blue-800">  => Typically, a user needs a new access token when they attempt to access a resource for the first time or after the previously granted access token expires. A refresh token is a special token that is used to obtain more access tokens.
            </p>
            <br />
            <p className="mb-2 ml-4 text-2xl font-semibold text-blue-600">
            Here's how cookies work and where they should be stored on the client-side:
            </p>
            <br />
            <p className="mb-6 ml-4 text-xl font-semibold text-blue-800">
               <span className="text-blue-500">a. Creation: </span> When a user visits a website, the web server can include HTTP headers in the response that instruct the user's browser to create and store cookies. These headers typically include information like the name of the cookie, its value, expiration time, and other attributes.
                <br />
                <span className="text-blue-500">b. Storage: </span> Cookies are stored on the client-side within the user's browser. Modern browsers have a built-in cookie storage mechanism, and these cookies are typically stored as text files. 
                <br />
                <span className="text-blue-500">c. Structure: </span> Cookies are usually small text files with a key-value pair format. They can store various types of information, such as user preferences, session identifiers, and tracking data.
                <br />
                <span className="text-blue-500">d.Expiration: </span>  Cookies can have an expiration date, after which they will be automatically deleted by the browser. Some cookies are "session cookies," which are deleted when the user closes their browser, while others can have a specific expiration date set by the server.
        
                <br />
                <span className="text-blue-500">e. Security: </span> Cookies can have attributes that make them more secure, such as the Secure flag (which ensures the cookie is only transmitted over HTTPS) and the HttpOnly flag (which prevents client-side scripts from accessing the cookie).
                <br />

            </p>
        </div>
    );
};

export default Blogs;