import styles from "./SvgIcon.module.css";

export default function SvgIconComponent({
    Icon,
    width,
    fillColor,
    onClick,
    className
}) {
    const fillColors = {
        'white': styles.white
    };

    return (
        <div 
            className={`${styles.svgWrapper} ${fillColor && fillColors[fillColor] ? fillColors[fillColor] : ''} ${className ? className : ''}`}
            style={{ width: width }}
            onClick={onClick}
        >
            <Icon />
        </div>
    );
};