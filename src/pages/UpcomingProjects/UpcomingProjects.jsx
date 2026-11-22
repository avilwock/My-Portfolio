import authors from "../../data/author";
import { Link } from "react-router-dom";
import "./UpcomingProjects.module.css"

function Authors() {
    return (
        <div className="home">
            <h1>Meet Our Authors</h1>
            {authors.map((author) => (
                <div key = {author.slug}>
                    <h2>{author.name}</h2>
                    <p> {author.category}</p>

                    <Link to={`/upcoming-projects/${author.slug}`}>
                    View Profile</Link>
                </div>
            ))}
        </div>
    )
}

export default Authors;