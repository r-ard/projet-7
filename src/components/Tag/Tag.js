import styles from "./Tag.module.css";

export default function TagComponent({
    children
}) {
    return (
        <span className={styles.tag}>
            { children }
        </span>
    );
};