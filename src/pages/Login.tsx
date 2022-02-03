import React, { FormEvent } from "react";
import useInput from "../hooks/useInput";
import { login } from "../store/auth/authActions";
import { useAppDispatch } from "../store/hooks";

function Login() {
  const [email, resetEmail]: any = useInput("");
  const [password, resetPassword]: any = useInput("");
  const dispatch = useAppDispatch();

  const isEmailValid = (email: string) =>
    email.match(/\S+@\S+\.\S+/) || email == "";

  const submitLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login(email.value, password.value));
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQEkBSvLQyP6vg/company-logo_200_200/0/1595486959254?e=2159024400&v=beta&t=Lvbyambeqg-FTkB5c8oZA_2mg05iWAygaC2mGBxm5JY"
              alt="lucus"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={submitLogin}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  {...email}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              {!isEmailValid(email.value) && (
                <div className="text-red-600 text-xs">Email is not valid</div>
              )}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  {...password}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              {password.value == "" && (
                <div className="text-red-600 text-xs">
                  Password shouldn't be empty
                </div>
              )}
            </div>
            <div>
              {isEmailValid(email.value) && password.value !== "" && (
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Sign in
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
