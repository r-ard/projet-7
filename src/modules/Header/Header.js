import LinkComponent from "../../components/Link/Link";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import styles from './Header.module.css';
import SvgIconComponent from "../../components/SvgIcon/SvgIcon";

const navigationButtons = [
    { label: 'Acceuil', path: '/' },
    { label: 'A Propos', path: '/about' }
];

export default function HeaderComponent() {
    return (
        <header className={styles.header}>
            <SvgIconComponent Icon={Logo} />
            <nav>
                <ul className={styles.linksWrapper}>
                    {
                        navigationButtons.map((i, index) => (<LinkComponent key={`navigation-link-${index}`} to={i.path}>{ i.label }</LinkComponent>))
                    }
                </ul>
            </nav>
        </header>
    );
};