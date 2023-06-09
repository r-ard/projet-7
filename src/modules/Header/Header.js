import { useNavigate } from "react-router-dom";

import LinkComponent from "../../components/Link/Link";

import styles from './Header.module.css';

const navigationButtons = [
    { label: 'Acceuil', path: '/' },
    { label: 'A Propos', path: '/about' }
];

export default function HeaderComponent() {
    return (
        <header>
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