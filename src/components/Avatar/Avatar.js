import styles from "./Avatar.module.css";

export default function AvatarComponent({
    image
}) {
    return (
        <img className={styles.avatar} src={image} />
    );
};