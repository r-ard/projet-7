import styles from "./Typography.module.css";

export default function TypographyComponent({
    children,
    type
}) {
    const types = {
        'h1': styles.h1,
        'h2': styles.h2,
        'h3': styles.h3
    };

    return (
        <label className={`${styles.typography} ${type && types[type] ? types[type] : ''}`}>
            { children }
        </label>
    );
};