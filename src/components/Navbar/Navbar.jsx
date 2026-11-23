import styles from './Navbar.module.css'
import WaterMark from '../WaterMark/WaterMark'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import authors from "../../data/author";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import  { useCart } from "../../context/useCart/useCart";

const announcements = [
        {title: "Build Thoughtful Experiences"},
        {title: "Design With Purpose"},
        {title: "Turn Ideas Into Reality"},
];

function Navbar() {

    const [activeSlide, setActiveSlide] = useState(0);
    const {cart } = useCart();

    const cartCount=cart.reduce(
        (total, item) => total + item.quantity,
        0
    );
    
    const links = [
        {name: "Home", path: "/"},
        {name: "Upcoming Projects", path: "/upcoming-projects"},
        {name: "Shop", path: "/shop"},
        {name: "About", path: "/about"},
        {name: "Contact Me", path: "/contact"},
        {name: "Calendar", path: "/calendar"}
    ];

    

    useEffect(() => {
    const timer = setTimeout(() => {
        setActiveSlide(current =>
            (current + 1) % announcements.length
        );
    }, 5000);

    return () => clearTimeout(timer);
}, [activeSlide]);

   
return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <WaterMark />
        </div>

        <div className={styles.navContent}>
            <div className={styles.buttons}>
    {links.map((link) => (
        <div key={link.name} className={styles.navItem}>
            <Link
                to={link.path}
                className={styles.button}
            >
                {link.name}
            </Link>

            {link.name === "Upcoming Projects" && (
                <div className={styles.dropdown}>
                    {authors.map((author) => (
                        <Link
                            key={author.slug}
                            to={`/upcoming-projects/${author.slug}`}
                            className={styles.dropdownLink}
                        >
                            {author.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    ))}
</div>
    <div className={styles.cart}>
    <Link to="/cart" className={styles.cartLink} aria-label={`Shopping cart, ${cartCount} items`}>
        <FontAwesomeIcon icon={faCartShopping} />

        {cartCount > 0 && (
            <span className={styles.cartCount}>
                {cartCount}
            </span>
        )}
    </Link>
</div>
            <div            
                className={styles.hero}
                aria-label="Vilwock Design announcements"
            >
                <div className={styles.announcement} aria-live="polite">
                    <h2 key={activeSlide}>
                        {announcements[activeSlide].title}
                    </h2>
                </div>

                <div
                    className={styles.announcementDots}
                    aria-label="Choose announcement"
                >
                    {announcements.map((announcement, index) => (
                        <button
                            key={announcement.title}
                            type="button"
                            className={
                                index === activeSlide ? styles.active : ""
                            }
                            onClick={() => setActiveSlide(index)}
                            aria-label={`Show announcement ${index + 1}`}
                            aria-pressed={index === activeSlide}
                        />
                    ))}
                </div>
            </div>
            
        </div>
    </nav>
);

}

export default Navbar;