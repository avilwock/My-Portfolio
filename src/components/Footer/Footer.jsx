import styles from './Footer.module.css'
import WaterMark from '../WaterMark/WaterMark'
import { Link } from "react-router-dom";


function Footer () {

    const links = [
        {name: "Featured Projects", path: "/featured"},
        {name: "About", path: "/about"},
        {name: "Contact", path: "/contact"}
    ];

return (
    <div className ={styles.footer}>
        <div className = {styles.container}>
            <WaterMark size="small" className={styles.mark}/>
        
        <ul className={styles.list}>
            {links.map((link) => (
                <li key={link.name}>
                    <Link
                        to={link.path}
                        className={styles.link}
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    </div>
    )
}

export default Footer