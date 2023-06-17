import styles from "./Footer.module.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import SvgIconComponent from "../../components/SvgIcon/SvgIcon";
import TypographyComponent from "../../components/Typography/Typography";

export default function FooterComponent() {
    return (
        <footer className={styles.footer}>
            <SvgIconComponent Icon={Logo} width="120px" fillColor="white" />
            <TypographyComponent type="h3">
                © 2020 Kasa. All rights reserved
            </TypographyComponent>
        </footer>
    );
};