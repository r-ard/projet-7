import { useState } from "react";
import styles from "./Dropdown.module.css";
import SvgIconComponent from "../SvgIcon/SvgIcon";

import { ReactComponent as ArrowIcon } from "./../../assets/icons/up-arrow.svg";

export default function DropdownComponent({
    title,
    children,
    defaultOpened,
    onOpen
}) {
    const [opened, setOpened] = useState(defaultOpened ? true : false);

    const onToggle = () => {
        if(onOpen) onOpen(!opened);
        setOpened(!opened);
    };

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropHeader}>
                <label className={styles.dropTitle}>{title}</label>
                <SvgIconComponent
                    className={`${styles.dropToggler} ${opened ? styles.toggled : ''}`}
                    Icon={ArrowIcon} 
                    onClick={onToggle} 
                />
            </div>
            <div className={`${styles.dropBody} ${opened ? styles.opened : ''}`}>
                {children}
            </div>
        </div>
    );
};