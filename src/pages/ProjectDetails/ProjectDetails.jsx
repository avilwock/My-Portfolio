import { useParams } from "react-router-dom";
import featured from "../../data/featured";
import styles from "./ProjectDetails.module.css";

function ProjectDetails() {
    const { projectId } = useParams();

    const project = featured.find(
        (item) => item.id === Number(projectId)
    );

    if (!project) {
        return <h2>Featured project not found.</h2>;
    }

    return (
        <div className={styles.container}>
            <h1>{project.title}</h1>

            <img className= {styles.image} src={project.cover} alt={project.title} />

            <p>{project.genre}</p>
            <p>{project.tagline}</p>
            <p>By {project.author}</p>
        </div>
    );
}

export default ProjectDetails;