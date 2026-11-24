
import { useParams } from "react-router-dom";
import projects from "../../data/projects";
import styles from "./ProjectDetails.module.css";

function ProjectDetails() {
    const { projectId } = useParams();

    const project = projects.find(
        (project) => project.slug === projectId
    );

    if (!project) {
        return <h1>Project Not Found</h1>;
    }

    return (
        <div className={styles.container}>
            <h2>{project.name}</h2>
            <p>{project.category}</p>
            <p>Description: {project.description}</p>
            <p>Technologies: {project.planned}</p>
            <p>Status: {project.status}</p>
        </div>
    );
}

export default ProjectDetails;
