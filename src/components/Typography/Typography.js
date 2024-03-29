import styles from "./Typography.module.css";

export default function TypographyComponent({
    children,
    type,
    color,
    align,
    className
}) {
    const types = {
        'h0': styles.h0,
        'h1': styles.h1,
        'h2': styles.h2,
        'h3': styles.h3,
        'h4': styles.h4
    };

    return (
        <label 
            className={`${styles.typography} ${type && types[type] ? types[type] : ''} ${color === 'secondary' ? styles.secondary : ''} ${align === 'start' ? styles.startAlign : (align === 'end' ? styles.endAlign : '')} ${className ? className : ''}`}
        >
            { children }
        </label>
    );
};