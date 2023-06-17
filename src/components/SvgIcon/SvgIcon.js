import styles from "./SvgIcon.module.css";

export default function SvgIconComponent({
    Icon,
    width,
    fillColor,
    onClick
}) {
    const fillColors = {
        'white': styles.white
    };

    return (
        <div 
            className={`${styles.svgWrapper} ${fillColor && fillColors[fillColor] ? fillColors[fillColor] : ''}`}
            style={{ width: width }}
            onClick={onClick}
        >
            <Icon />
        </div>
    );
};