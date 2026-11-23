
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import featured from "../../data/featured";
import { Link } from "react-router-dom";




function SlideBar() {
    const [activeProject, setActiveProject] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveProject((current) =>
                (current + 1) % featured.length
            );
        }, 5000);

        return () => clearTimeout(timer);
    }, [activeProject]);

    return (
        <div className={styles.hero}>
          <h2 className={styles.heroTitle}>Projects</h2>
            <Link
                to={`/featured`}
                className={styles.projectlink}
            >
                Featured Projects
            </Link>
           
            <section className={styles.projectslide}>
                <div className={styles.projectcover}>
                    <img
                        src={featured[activeProject].cover}
                        alt="Featured project cover"
                    />
                </div>
               

                <div className={styles.projectinfo}>
                    

                    <h3 key={activeProject}>
                        {featured[activeProject].title}
                    </h3>

                    <p className={styles.genre}>
                        {featured[activeProject].genre}
                    </p>

                    <p className={styles.tagline}>
                        {featured[activeProject].tagline}
                    </p>

                    <p className={styles.author}>
                        By {featured[activeProject].author}
                    </p>

                    <Link
                        to={`/featured`}
                        className={styles.projectlink}
                        >
                            Discover More Info
                        </Link>
                </div>
            </section>

            <div className={styles.slideControls}>
    <button
        type="button"
        className={styles.prevButton}
        onClick={() =>
            setActiveProject((current) =>
                (current - 1 + featured.length) % featured.length
            )
        }
        aria-label="Previous featured project"
    >
        &#10094;
    </button>

    <div className={styles.announcementDots}
        aria-label="Choose featured slide"
    >
        {featured.map((project, index) => (
            <button
                key={project.title}
                type="button"
                className={
                    index === activeProject ? styles.active : ""
                }
                onClick={() => setActiveProject(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={index === activeProject}
            />
        ))}
    </div>

    <button
        type="button"
        className={styles.nextButton}
        onClick={() =>
            setActiveProject((current) =>
                (current + 1) % featured.length
            )
        }
        aria-label="Next featured link"
    >
        &#10095;
    </button>
</div>
        </div>
    );
}

function Home() {
    return (
        <div>
          <SlideBar />
            <div className={styles.home}>
    
            </div>
        </div>
    );
}

export default Home;
