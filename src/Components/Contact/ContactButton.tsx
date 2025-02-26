import { useState, useRef, useEffect } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import { ContactForm } from './ContactForm';

interface ContactFormProps {}

export const ContactButton: React.FC<ContactFormProps> = () => {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    const formRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const toggleForm = (): void => {
        setIsFormOpen(!isFormOpen);
    };

    // Close the form when clicking outside of it or the button
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            // Check if the click is outside both the form and the button
            if (
                formRef.current &&
                !formRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsFormOpen(false); // Close the form if the click is outside
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside); // Clean up the event listener
        };
    }, []);

    return (
        <div className="relative">
            {/* Floating Circle Button with message icon */}
            <button
                ref={buttonRef}
                onClick={toggleForm}
                className="fixed bottom-5 right-5 p-4 text-white rounded-full shadow-lg focus:outline-none"
            >
                <FaRegCommentDots size={24} />
            </button>

            {/* Contact Form (Hidden by default) */}
            {isFormOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div ref={formRef}>
                        <ContactForm />
                    </div>
                </div>
            )}
        </div>
    );
};
