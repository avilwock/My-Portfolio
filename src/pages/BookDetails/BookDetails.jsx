import { useParams } from "react-router-dom";
import featured from "../../data/featured";
import styles from "../BookDetails/BookDetails.module.css"

function BookDetails() {
    const { bookId } = useParams();

    const book = featured.find(
        (item) => item.id === Number(bookId)
    );

    if (!book) {
        return <h1>Book not found</h1>;
    }

    return (
        <div className={styles.container}>

            <h1>{book.title}</h1>
            <img className={styles.bookimg} src={book.cover} alt={book.title} />
            <p>{book.genre}</p>
            <p>{book.tagline}</p>
            <p>By {book.author}</p>
            <a href={book.link}>Github Link</a>
        </div>
    );
}

export default BookDetails;