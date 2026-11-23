import styles from './Footer.module.css'
import WaterMark from '../WaterMark/WaterMark'
import { Link } from "react-router-dom";


function Footer () {

    const links = [
        {name: "Featured Projects", path: "/featured"},
        {name: "About", path: "/about"},
        {name: "Contact", path: "/contact"},
        {name: "Github", href: "github.com/avilwock"}
    ];

return (
    <div className ={styles.footer}>
        <div className = {styles.container}>
            <WaterMark size="small" className={styles.mark}/>
        
        <ul className={styles.list}>
            {links.map((link) => (
                <li key={link.name}>
                    {link.path ? (
                        <Link to={link.path} className={styles.link}>
                            {link.name}
                        </Link>
                    ) : (
                        <a
                            href={`https://${link.href}`}
                            className={styles.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.name}
                        </a>
                    )}
                </li>
            ))}
        </ul>
        </div>
    </div>
    )
}

export default Footer