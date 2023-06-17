import styles from "./SvgIcon.module.css";

export default function SvgIconComponent({
    Icon,
    width,
    fillColor
}) {
    const fillColors = {
        'white': styles.white
    };

    return (
        <div 
            className={`${styles.svgWrapper} ${fillColor && fillColors[fillColor] ? fillColors[fillColor] : ''}`}
            style={{ width: width }}
        >
            <Icon />
        </div>
    );
};