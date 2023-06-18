import AvatarComponent from "../../components/Avatar/Avatar";
import RateComponent from "../../components/Rate/Rate";
import TagComponent from "../../components/Tag/Tag";
import TypographyComponent from "../../components/Typography/Typography";
import styles from "./ApartmentPresentation.module.css";

export default function ApartmentPresentationComponent({
    data
}) {
    return (
        <div className={styles.apartmentPresentation}>
            <div className={styles.presentationA}>
                <TypographyComponent 
                    type="h2" 
                    color="secondary"
                    align="start"
                >
                    { data.title }
                </TypographyComponent>
                <TypographyComponent 
                    type="h4" 
                    color="secondary"
                    align="start"
                >
                    { data.location }
                </TypographyComponent>
                <ul className={styles.presentationTags}>
                    {
                        data.tags.map((tag, index) => (
                            <TagComponent key={`presentation-tag-${index}`}>
                                { tag }
                            </TagComponent>
                        ))
                    }
                </ul>
            </div>
            <div className={styles.presentationB}>
                <div className={styles.host}>
                    <TypographyComponent
                        type="h4"
                        color="secondary"
                        align="end"
                    >
                        { data.host.name }
                    </TypographyComponent>
                    <AvatarComponent image={data.host.picture} />
                </div>
                <RateComponent rate={data.rating} maxRate={5} />
            </div>
        </div>
    );
};