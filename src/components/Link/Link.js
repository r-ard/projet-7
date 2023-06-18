import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Link.module.css";

export default function LinkComponent({
    to,
    visited,
    children,
    className
}) {
    const location = useLocation();
    const navigate = useNavigate();

    const isVisiting = visited === true || (location.pathname.toLowerCase() == to.toLowerCase());
    return (
        <a className={`${styles.link} ${isVisiting ? styles.visited : ''} ${className ? className : ''}`} onClick={() => navigate(to)}>
            { children }
        </a>
    );
};