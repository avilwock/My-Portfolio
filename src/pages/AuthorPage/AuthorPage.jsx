import { useParams } from "react-router-dom";
import authors from "../../data/author";

function AuthorPage() {
    const {authorId} = useParams();

    const author = authors.find(
        (author) => author.slug === authorId
    );

    return (
        <div>
            <h1>Author: {author.name}</h1>
            <p>Category: {author.description}</p>
        </div>
    )
}

export default AuthorPage;