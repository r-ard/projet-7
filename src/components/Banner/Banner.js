import styles from "./Banner.module.css";

export default function BannerComponent({
    source,
    children
}) {
    return (
        <div
            className={styles.banner}
            style={{ backgroundImage: `url(${source})` }}
        >
            { children }
        </div>
    );
};