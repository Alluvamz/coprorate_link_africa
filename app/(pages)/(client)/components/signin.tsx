'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [requestError, setRequestError] = useState('');

    const router = useRouter();

    // const handleSignInWithGoogle = async () => {
    //   const res = await signInWithGoogle()
    //   if (res) {
    //     setEmail('')
    //     setPassword('')
    //     router.push('/')
    //   }
    // }

    const handleSignIn = async () => {
        if (isLoading) {
            return;
        }

        setRequestError('');
        setIsLoading(true);

        try {
            const res = await signIn('credentials', { email, password, redirect: false });

            if (res?.error) {
                setRequestError(res.error);
                setIsLoading(false);
                return;
            }

            if (res?.ok) {
                setEmail('');
                setPassword('');
                setIsLoading(false);

                /** attempt to send user to admin if they are not admin the middleware will redirect them to home page */
                return router.push('/admin');
            }
        } catch (e) {
            console.error(e);
        }
        setIsLoading(false);
    };
    return (
        <main className="mx-auto w-full max-w-md p-6">
            <div className="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Don't have an account yet?
                            <a
                                className="pl-2 font-medium text-red-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="/signup"
                            >
                                Sign up here
                            </a>
                        </p>
                    </div>

                    <div className="mt-5">
                        <button
                            type="button"
                            className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            // onClick={handleSignInWithGoogle}
                        >
                            <svg className="h-auto w-4" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                <path
                                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                                    fill="#EB4335"
                                />
                            </svg>
                            Sign in with Google
                        </button>

                        <div className="flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-gray-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                            Or
                        </div>

                        {/* to show errors if request failed */}
                        {requestError ? (
                            <div className="w-full py-3">
                                <p className="text-center text-sm text-red-600">{requestError}</p>
                            </div>
                        ) : null}

                        {/* Form */}
                        <form>
                            <div className="grid gap-y-4">
                                {/* Form Group */}
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm dark:text-white">
                                        Email address
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:ring-red-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                            required
                                            aria-describedby="email-error"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 end-0 hidden items-center pe-3">
                                            <svg
                                                className="h-5 w-5 text-red-500"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                                aria-hidden="true"
                                            >
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-2 hidden text-xs text-red-600" id="email-error">
                                        Please include a valid email address so we can get back to you
                                    </p>
                                </div>
                                {/* End Form Group */}

                                {/* Form Group */}
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="mb-2 block text-sm dark:text-white">
                                            Password
                                        </label>
                                        <a
                                            className="text-sm font-medium text-red-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                            href="../examples/html/recover-account.html"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:ring-red-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                            required
                                            aria-describedby="password-error"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                        />

                                        <div className="pointer-events-none absolute inset-y-0 end-0 hidden items-center pe-3">
                                            <svg
                                                className="h-5 w-5 text-red-500"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                                aria-hidden="true"
                                            >
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-2 hidden text-xs text-red-600" id="password-error">
                                        8+ characters required
                                    </p>
                                </div>
                                {/* End Form Group */}

                                {/* Checkbox */}
                                <div className="flex items-center">
                                    <div className="flex">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="pointer-events-none mt-0.5 shrink-0 rounded border-gray-200 text-red-600 focus:ring-red-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-red-500 dark:checked:bg-red-500 dark:focus:ring-offset-gray-800"
                                        />
                                    </div>
                                    <div className="ms-3">
                                        <label htmlFor="remember-me" className="text-sm dark:text-white">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                {/* End Checkbox */}

                                <button
                                    type="button"
                                    disabled={isLoading}
                                    onClick={handleSignIn}
                                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        {/* End Form */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignInForm;
