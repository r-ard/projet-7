import styles from "./Thumb.module.css";

export default function ThumbComponent({
    image,
    title,
    onClick
}) {
    return (
        <li 
            className={styles.thumb}
            style={{ backgroundImage: `url(${image})` }}
            onClick={onClick}
        >
            <label className={styles.title}>{title}</label>
        </li>
    );
};