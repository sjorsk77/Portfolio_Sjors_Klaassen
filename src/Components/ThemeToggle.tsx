import {useTheme} from "./ThemeContext";
import {SunIcon, MoonIcon} from "@heroicons/react/24/solid";
export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="flex items-center space-x-4">
            {/* Sun and Moon Icons */}
            {theme === 'light' ? (
                <SunIcon className="w-6 h-6 text-yellow-500"/>
            ) : (
                <MoonIcon className="w-6 h-6 text-gray-100"/>
            )}

            {/* Toggle Button */}
            <button
                onClick={toggleTheme}
                className="relative flex items-center w-12 h-6 p-1 bg-gray-300 rounded-full dark:bg-gray-600 focus:outline-none"
                aria-label="Toggle Theme"
            >
                {/* Toggle Ball */}
                <span
                    className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                        theme === 'light' ? 'translate-x-0' : 'translate-x-6'
                    }`}
                ></span>
            </button>
        </div>
    );
}