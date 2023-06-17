import { generateIndexArray } from "../../utils/ArrayHelper";
import SvgIconComponent from "../SvgIcon/SvgIcon";

import { ReactComponent as RateEnabledIcon } from "../../assets/icons/rate-enabled.svg";
import { ReactComponent as RateDisabledIcon } from "../../assets/icons/rate-disabled.svg";

import styles from "./Rate.module.css";

export default function RateComponent({
    rate,
    maxRate
}) {
    if(!maxRate) maxRate = 5;

    return (
        <ul className={styles.rate}>
            {
                generateIndexArray(maxRate).map(starIndex => (
                    <li className={styles.item}>
                        <SvgIconComponent Icon={starIndex < rate ? RateEnabledIcon : RateDisabledIcon} />
                    </li>
                ))
            }
        </ul>
    );
};