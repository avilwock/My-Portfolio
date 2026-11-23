import { useParams } from "react-router-dom";
import projects from "../../data/projects";

function ProjectPage() {
    const {projectId} = useParams();

    const project = projects.find(
        (project) => project.slug === projectId
    );

    return (
        <div>
            <h1>Author: {project.name}</h1>
            <p>Category: {project.description}</p>
        </div>
    )
}

export default ProjectPage;