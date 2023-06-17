import styles from "./Gallery.module.css";

export default function GalleryComponent({
    children
}) {
    return (
        <ul className={styles.gallery}>
            { children }
        </ul>
    );
};