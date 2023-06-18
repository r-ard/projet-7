import DropdownComponent from "../../components/Dropdown/Dropdown";
import styles from "./ApartmentDetails.module.css";

export default function ApartmentDetailsComponent({
    description,
    equipments
}) {
    return (
        <div className={styles.apartmentDetails}>
            <DropdownComponent
                title="Description"
            >
                { description }
            </DropdownComponent>
            <DropdownComponent
                title="Equipements"
            >
                <ul className={styles.equipments}>
                    {
                        equipments && equipments.map((e, index) => (
                            <label className={styles.equipmentItem} key={`equipements-${index}`}>
                                { e }
                            </label>
                        ))
                    }
                </ul>
            </DropdownComponent>
        </div>
    );
};