import '@/app/_styles/global.css';

import { Metadata } from 'next';

import AuthProvider from '@/app/context/AuthProvider';
import PrelineScript from '@/app/_components/PrelineScripts';
import Sidebar from './components/Sidebar';
import HeaderComponent from './components/HeaderComponent';
import { checkApplicationInProduction } from '@/lib/helpers';
import InterFontWrapper from '@/app/_components/InterFontWrapper';

export const metadata: Metadata = {
    title: 'Corporate Link Africa',
    description: 'Simplified Business Narratives',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const production = checkApplicationInProduction();

    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <InterFontWrapper>
                        <HeaderComponent />
                        <div className="sticky inset-x-0 top-0 z-20 border-y bg-white px-4 sm:px-6 md:px-8 lg:hidden dark:border-gray-700 dark:bg-gray-800">
                            <div className="flex items-center py-4">
                                <button
                                    type="button"
                                    className="text-gray-500 hover:text-gray-600"
                                    data-hs-overlay="#application-sidebar"
                                    aria-controls="application-sidebar"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="sr-only">Toggle Navigation</span>
                                    <svg
                                        className="h-4 w-4 flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line x1="3" x2="21" y1="6" y2="6" />
                                        <line x1="3" x2="21" y1="12" y2="12" />
                                        <line x1="3" x2="21" y1="18" y2="18" />
                                    </svg>
                                </button>
                                {/* End Navigation Toggle */}

                                {/* Breadcrumb */}
                                <ol className="ms-3 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
                                    <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                                        Application Layout
                                        <svg
                                            className="mx-3 h-2.5 w-2.5 flex-shrink-0 overflow-visible text-gray-400 dark:text-gray-600"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                    </li>
                                    <li
                                        className="truncate text-sm font-semibold text-gray-800 dark:text-gray-400"
                                        aria-current="page"
                                    >
                                        Dashboard
                                    </li>
                                </ol>
                                {/* End Breadcrumb */}
                            </div>
                        </div>
                        <Sidebar />
                        <div className="w-full px-4 pt-10 sm:px-6 md:px-8 lg:ps-72">{children}</div>
                        <PrelineScript />
                    </InterFontWrapper>
                </AuthProvider>
            </body>
        </html>
    );
}
