import styles from "./WaterMark.module.css"

function WaterMark({ size = "", className = "" }) {
    return (
        <div className={`${styles.logo} ${styles[size]} ${className}`}>
            <span>Vilwock</span>
            <span className={styles.divider}></span>
            <span>Design</span>
        </div>
    )
}

export default WaterMark