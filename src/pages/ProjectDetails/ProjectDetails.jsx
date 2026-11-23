import { useParams } from "react-router-dom";
import projects from "../../data/projects";
import styles from "./ProjectDetails.module.css";

function ProjectDetails() {
    const { projectId } = useParams();

    const project = projects.find(
        (item) => item.slug === projectId
    );

    if (!project) {
        return <h1>Project Not Found</h1>;
    }

    return (
        <div className={styles.container}>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectDetails;