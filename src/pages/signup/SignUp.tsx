export function SignUp() {
    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-gray-100 flex justify-center items-center p-5">
                <div className="w-full max-w-screen-sm bg-white p-10 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-primary text-center mb-8">
                        Sign Up
                    </h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-base mb-2 font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="mt-4 block w-full h-12 px-3 py-2 border border-primary rounded-md shadow-sm focus:ring-primary-700"
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
                                placeholder="Create a strong password"
                                className="mt-4 block w-full h-12 px-3 py-2 border border-primary rounded-md shadow-sm focus:ring-primary-700"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="role" className="block text-base mb-2 font-medium text-gray-700">
                                Select Role
                            </label>
                            <select
                                id="role"
                                className="mt-4 block w-full h-12 px-3 py-2 border border-primary rounded-md shadow-sm focus:ring-primary-700"
                                required
                            >
                                <option value="">Choose your role</option>
                                <option value="MANAGER">Manager</option>
                                <option value="ADMINISTRATIVE">Administrative</option>
                                <option value="SCIENTIST">Scientist</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full h-12 mt-4 mb-2 bg-primary text-white py-2 px-4 rounded hover:bg-secondary focus:ring-2 focus:ring-offset-2 transition-all"
                        >
                            Create Account
                        </button>

                        <div className="text-center mt-9 text-base text-gray-500">
                            Already have an account?{' '}
                            <a href="/public" className="text-primary hover:underline">
                                Login
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="flex-1 bg-primary flex flex-col justify-center items-center text-white p-5 text-center">
                <h1 className="text-5xl mb-5">Create Your Account</h1>
                <p className="max-w-lg leading-relaxed">
                    Join our platform and unlock a world of professional opportunities.
                    Your journey starts here with a simple sign-up.
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <div className="loader mt-5 flex space-x-2">
                    <span className="w-4 h-4 rounded-full bg-gray-400 animate-bounce"></span>
                    <span className="w-4 h-4 rounded-full bg-gray-400 animate-bounce delay-100"></span>
                    <span className="w-4 h-4 rounded-full bg-gray-400 animate-bounce delay-200"></span>
                </div>
            </div>
        </div>
    );
}