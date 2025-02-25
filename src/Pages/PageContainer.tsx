interface PageContainerProps {
    children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
        <div className='
        mx-10 xl:mx-40 lg:mx-20 h-full
        flex flex-col justify-center items-center
        '>
            {children}
        </div>
    );
}