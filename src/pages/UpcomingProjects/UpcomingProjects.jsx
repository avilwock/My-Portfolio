import project from "../../data/projects";
import { Link } from "react-router-dom";
import styles from "./UpcomingProjects.module.css"

function Projects() {
    return (
        <div className="home">
            <h1>Upcoming Projects</h1>
            {project.map((project) => (
                <div className= {styles.project} key = {project.slug}>
                    <h2>{project.name}</h2>
                    <p> {project.category}</p>
                    <p> Description: {project.description}</p>
                    <p> Technologies: {project.planned} </p>
                    <p> Status: {project.status} </p>

                    <Link to={`/projects/${project.slug}`}>
                    View Profile</Link>
                </div>
            ))}
        </div>
    )
}

export default Projects;