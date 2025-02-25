interface PageContainerProps {
    children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
        <div className='
        min-h-[calc(100vh-var(--navbar-height)-var(--footer-height))] mx-10 xl:mx-40 lg:mx-20
        flex flex-col justify-center items-center
        '>
            {children}
        </div>
    );
}