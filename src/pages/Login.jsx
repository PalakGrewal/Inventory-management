import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const sumbmitHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <form onSubmit={sumbmitHandler}>
      <div className="space-y-12 w-1/2">
        <div className="">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Sign In
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Your Username"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder=" Enter Your Email Address"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder=" Enter Your Password"
                />
              </div>
            </div>
          </div>
        
      </div>

      <div className="mt-10 flex items-center justify-start gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Log In
        </button>
      </div>
      <div>
        <p className="mt-2 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
}
