import DropdownComponent from "../../components/Dropdown/Dropdown";
import styles from "./Legals.module.css";

export default function LegalsComponent({
    data
}) {
    return (
        <ul className={styles.legals}>
            {
                data && Object.entries(data).map(([title, content], index) => (
                    <li key={`legal-item-${index}`} className={styles.item}>
                        <DropdownComponent
                            title={title}
                        >
                            { content }
                        </DropdownComponent>
                    </li>
                ))
            }
        </ul>
    );
};