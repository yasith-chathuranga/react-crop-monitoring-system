export function LogIn() {
    return (
        <>
            <div className="flex h-screen">
                <div
                    className="flex-1 bg-primary flex flex-col justify-center items-center text-white p-5 text-center">
                    <h1 className="text-5xl mb-5">Welcome to Our Platform</h1>
                    <p className="max-w-lg leading-relaxed">
                        Discover a world of possibilities. Secure, intuitive, and designed with you in mind. Join us and
                        unlock your potential.
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="250"
                        height="250"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-5"
                    >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <div className="loader mt-5 flex space-x-2">
                        <span className="w-4 h-4 rounded-full bg-gray-400 animate-bounce"></span>
                        <span className="w-4 h-4 rounded-full bg-gray-400 animate-bounce delay-100"></span>
                        <span className="w-4 h-4 rounded-full bg-gray-400 animate-bounce delay-200"></span>
                    </div>
                </div>

                <div className="flex-1 bg-gray-100 flex justify-center items-center p-5">
                    <div className="w-full max-w-screen-sm bg-white p-10 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-primary text-center mb-8">Login to Your Account</h2>
                        <form id="loginForm">
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-base mb-2 font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="johndoe@example.com"
                                    className="mt-4 block w-full h-12 px-3 py-2 border border-primary rounded-md shadow-sm focus:ring-primary-700"
                                    autoComplete="email"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-base mb-2 font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="mt-4 block w-full h-12 px-3 py-2 border border-primary rounded-md shadow-sm focus:ring-primary-700"
                                    autoComplete="current-password"
                                    required
                                />
                            </div>

                            <div className="mb-4 flex items-center">
                                <input
                                    type="checkbox"
                                    id="rememberCheck"
                                    className="h-4 w-4 border-gray-300 rounded mt-4"
                                />
                                <label htmlFor="rememberCheck" className="ml-2 block text-base mt-4 text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            {/*<div id="loginFeedback" className="text-center text-red-500 mb-3"></div>*/}

                            <button
                                type="submit"
                                className="w-full h-12 mt-4 mb-2 bg-primary text-white py-2 px-4 rounded hover:bg-secondary focus:ring-2 focus:ring-offset-2 transition-all"
                            >
                                Login
                            </button>

                            <div className="text-center mt-9">
                                <a href="#" className="text-base text-gray-500 hover:underline">
                                    Forgot Password?
                                </a>
                            </div>

                            <div className="text-center mt-4 text-base text-gray-500">
                                Don't have an account?{' '}
                                <a href="/signup" className="text-primary hover:underline">
                                    Sign Up
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}