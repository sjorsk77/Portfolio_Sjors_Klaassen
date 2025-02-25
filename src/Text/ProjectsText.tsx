import img from "../../public/assets/images/Portret.jpg"


export const ProjectsIntroduction = "On this page you can find all the projects I have worked on. Click on a project to see more details.";

export const ProjectsDetails = [
    {
        id: 1,
        title: "My digital portfolio",
        shortDescription: "For this project the plan was to create a digital portfolio. I did this to improve my frontend skills and to have a place to showcase my work.",
        description: "",
        thumbnail: "/assets/images/portfolio_thumbnail.jpg",
        startDate: "25-01-2025",
        endDate: "27-01-2025",
        skillIds: [1, 2, 3],
        detailText: [
            {
                id: 1,
                title: "Why a digital portfolio?",
                description: "Detail 1 description",
                imgUrl: "https://via.placeholder.com/150"
            },
            {
                id: 2,
                title: "Approach",
                description: "Detail 2 description",
                img: "/assets/images/img.png"
            }
        ]
    },
    {
        id: 2,
        title: "PantryPro",
        shortDescription: "This was a school project in which I created a web app called PantryPro. PantryPro was created to help people keep track of their pantry items. It is a full stack application that uses a MySQL database, a SpringBoot backend and a React frontend.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit sollicitudin dictum. Nullam non urna a nunc ullamcorper finibus non at lacus. Vestibulum vitae lacinia dolor. Morbi sed orci congue, aliquam tellus ut, suscipit felis. Pellentesque justo urna, sagittis eget euismod id, blandit viverra tortor. Quisque non nibh augue. Donec eget tempus tortor, ut pharetra ante. Vestibulum sit amet scelerisque lectus. Quisque vehicula ligula vitae pellentesque fringilla. Vivamus ultrices a metus id varius. Fusce dolor lectus, elementum a mi eget, iaculis pretium purus.",
        thumbnail: "/assets/images/main_logo.png",
        startDate: "25-01-2025",
        endDate: "27-01-2025",
        skillIds: [1, 2, 3],
        detailText: [
            {
                id: 1,
                title: "Why a digital portfolio?",
                description: "Detail 1 description",
                imgUrl: "https://via.placeholder.com/150"
            },
            {
                id: 2,
                title: "Approach",
                description: "Detail 2 description",
                img: "/assets/images/Portret.jpg"
            }
        ]
        },
        {
            id: 3,
            title: "Thijsv.nl",
            shortDescription: "A friend of mine had to create a website for a school project. This website should include all kinds of content he made and I implemented this content in a portfolio website.",
            description: "",
            thumbnail: "/assets/images/logot.png",
            startDate: "25-01-2025",
            endDate: "27-01-2025",
            url: "https://thijsv.nl",
            skillIds: [1, 2, 3],
            detailText: [
                {
                    id: 1,
                    title: "Why a digital portfolio?",
                    description: "Detail 1 description",
                    imgUrl: "https://via.placeholder.com/150"
                },
                {
                    id: 2,
                    title: "Approach",
                    description: "Detail 2 description",
                    img: "/assets/images/logot.png"
                }
            ]
        },
    {
        id: 4,
        title: "Omgevingsspecialist",
        shortDescription: "My brother started his own company: Omgevingsspecialist. He asked me to create a website for his company. For building this site I made an API for email services and created a react frontend.",
        description: "",
        thumbnail: "/assets/images/logo_text.png",
        startDate: "25-01-2025",
        endDate: "27-01-2025",
        url: "https://omgevingsspecialist.nl",
        skillIds: [1, 2, 3],
        detailText: [
            {
                id: 1,
                title: "Why a digital portfolio?",
                description: "Detail 1 description",
                imgUrl: "https://via.placeholder.com/150"
            },
            {
                id: 2,
                title: "Approach",
                description: "Detail 2 description",
                img: "/assets/images/logot.png"
            }
        ]
    },
    ]