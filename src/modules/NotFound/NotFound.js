import LinkComponent from "../../components/Link/Link";
import TypographyComponent from "../../components/Typography/Typography";

import styles from "./NotFound.module.css";

export default function NotFoundComponent() {
    return (
        <div className={styles.notFound}>
            <TypographyComponent 
                type="h0"
                color="secondary"
            >
                404
            </TypographyComponent>

            <TypographyComponent 
                type="h2"
                color="secondary"
                className={styles.message}
            >
                Oups! La page que vous demandez n'existe pas.
            </TypographyComponent>

            <LinkComponent
                to="/"
                visited={true}
                className={styles.link}
            >
                Retourner sur la page d’accueil
            </LinkComponent>
        </div>
    );
};