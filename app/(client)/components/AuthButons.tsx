"use client"
import { useAuthState } from "react-firebase-hooks/auth";
import { BsDoorOpen } from "react-icons/bs";
import { useRouter } from "next/navigation";

const AuthButtons = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push('/signin')
    }

    return (

        (
            <a className="flex items-center gap-x-2 font-semibold text-gray-500 hover:text-red-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-red-500 dark:hover:text-red-500" href="/signin">
                Sign In
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </a>
        )

    );
}
export default AuthButtons;