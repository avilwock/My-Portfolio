
import { useParams, useLocation } from "react-router-dom";
import featured from "../../data/featured";
import projects from "../../data/projects";
import styles from "./ProjectDetails.module.css";

function ProjectDetails() {
    const { projectId } = useParams();
    const location = useLocation();

    // Upcoming projects
    if (location.pathname.startsWith("/projects/")) {
        const project = projects.find(
            (item) => item.slug === projectId
        );

        if (!project) {
            return <h2>Project not found.</h2>;
        }

        return (
            <div className={styles.container}>
                <h1>{project.name}</h1>
                <p>{project.category}</p>
                <p>Description: {project.description}</p>
                <p>Technologies: {project.planned}</p>
                <p>Status: {project.status}</p>
            </div>
        );
    }

    // Featured projects
    const project = featured.find(
        (item) => item.id === Number(projectId)
    );

    if (!project) {
        return <h2>Featured project not found.</h2>;
    }

    return (
        <div className={styles.container}>
            <h1>{project.title}</h1>

            <img
                className={styles.image}
                src={project.cover}
                alt={project.title}
            />

            <p>{project.genre}</p>
            <p>{project.tagline}</p>
            <p>By {project.author}</p>
        </div>
    );
}

export default ProjectDetails;
