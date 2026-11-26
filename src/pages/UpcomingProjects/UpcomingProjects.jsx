
import projects from "../../data/projects";
import { Link } from "react-router-dom";
import styles from "./UpcomingProjects.module.css"

function UpcomingProjects() {
    return (
        <div className={styles.container}>
            <h1>Upcoming Projects</h1>
            {projects.map((project) => (
                <div key={project.slug}>
                    <h2>{project.name}</h2>
                    <p>{project.category}</p>
                    <p>{project.description}</p>
                    <p>Technologies: {project.planned}</p>
                    <p>Status: {project.status}</p>
                    <Link to={`/projects/${project.slug}`}>
                        View Profile
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default UpcomingProjects;
