import styles from "../FeaturedWorks/FeaturedWorks.module.css";
import featured from "../../data/featured";

function FeaturedWorks() {
    return (
        <div className={styles.featuredWorks}>
            <h1>Featured Works</h1>

            <div className={styles.bookList}>
                {featured
            .filter((book) => book.isFeatured === true)
            .map((book) => (
                <div key={book.id} className={styles.bookCard}>
                    <img className={styles.projectimg} src={book.cover} alt={book.title} />

                    <div className={styles.bookInfo}>
                        <h2>{book.title}</h2>
                        <p className={styles.genre}>{book.genre}</p>
                        <p>{book.tagline}</p>
                        <p>By {book.author}</p>
                        <a className = {styles.link} href={book.link}>Visit Github</a>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default FeaturedWorks;