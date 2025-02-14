import { useState } from "react";
import emailjs from "emailjs-com";

interface FormData {
    email: string;
    message: string;
}

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false); // State to track loading

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true); // Set loading to true when sending starts

        emailjs
            .send(
                "service_xeh6uzl", // Replace with your EmailJS Service ID
                "template_ralp2g6", // Replace with your EmailJS Template ID
                {
                    email: formData.email,
                    message: formData.message,
                },
                "PG2qIcGUQr3PhNqmr" // Replace with your EmailJS User ID
            )
            .then((response) => {
                console.log("Success:", response);
                setFormData({ email: "", message: "" }); // Clear form on success
            })
            .catch((error) => {
                console.error("Error:", error);
            })
            .finally(() => {
                setIsLoading(false); // Reset loading state
            });
    };

    return (
        //* voeg kruisie toe om te sluiten
        <div className="contact-form-container mx-auto bg-white h-fit mt-10 p-6 rounded-lg dark:bg-gray-700 dark:text-white">
            <h2 className="text-2xl font-bold text-center mb-4">
                Let's get in touch!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                        What is your e-mail?
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="example@example.com"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                        What do you want to tell me?
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Write a message..."
                        rows={4}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={isLoading} // Disable button while loading
                    className={`w-full py-2 rounded-lg transition duration-200 ${
                        isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8H4z"
                                ></path>
                            </svg>
                            <span className="ml-2">Sending...</span>
                        </div>
                    ) : (
                        "Send your message!"
                    )}
                </button>
            </form>
        </div>
    );
};
