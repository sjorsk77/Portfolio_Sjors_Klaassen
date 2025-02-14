import {Home} from "../Pages/Home";
import {PageNotFound} from "../Pages/PageNotFound";
import {Skills} from "../Pages/Skills";
import {Roadmap} from "../Pages/Roadmap";
import {Projects} from "../Pages/Projects";
import {PageProps} from "./Interfaces";
import {Project} from "../Pages/Project";


export const pages: PageProps[] = [
    {path: "/", component: <Home/>, name : "Home", isOnNavigation: true},
    {path: "skills", component: <Skills/>, name: "Skills", isOnNavigation: true},
    {path: "/projects", component: <Projects/>, name: "Projects", isOnNavigation: true},
    {path: "roadmap", component: <Roadmap/>, name: "Roadmap", isOnNavigation: true},
    {path: "/project/:id", component: <Project/>, name: "Project", isOnNavigation: false},
    {path: "*", component: <PageNotFound/>, name: "Page Not Found", isOnNavigation: false}
]