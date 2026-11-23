import project from "../../data/projects";
import { Link } from "react-router-dom";
import "./UpcomingProjects.module.css"

function Projects() {
    return (
        <div className="home">
            <h1>Upcoming Projects</h1>
            {project.map((project) => (
                <div key = {project.slug}>
                    <h2>{project.name}</h2>
                    <p> {project.description}</p>

                    <Link to={`/projects/${project.slug}`}>
                    View Profile</Link>
                </div>
            ))}
        </div>
    )
}

export default Projects;