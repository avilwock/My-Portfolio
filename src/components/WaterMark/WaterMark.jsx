import styles from "./WaterMark.module.css"

function WaterMark({ size = "", className = "" }) {
    return (
        <div className={`${styles.logo} ${styles[size]} ${className}`}>
            <span>Amanda</span>
            <span className={styles.divider}></span>
            <span>Vilwock</span>
        </div>
    )
}

export default WaterMark