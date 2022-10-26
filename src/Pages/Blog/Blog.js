import { Accordion } from 'flowbite-react';
import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-3/4 md:mx-auto'>
            <Accordion alwaysOpen={true}>
                <Accordion.Panel>
                    <Accordion.Title>
                        what is cors?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Why are you using firebase? What other options do you have to implement authentication?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                            Since now we understand what authentication is and why it is essential, let's quickly understand the different types of authentication options available.
                            #1. Token Authentication. ...
                            #2. Standard Authentication. ...
                            #3. Multi-Factor Authentication (MFA) ...
                            #4. Passwordless Authentication. ...
                            #5. Social Authentication.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                    How does the private route work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </p>
                       
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                    What is Node? How does Node work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                        </p>
                       
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blog;