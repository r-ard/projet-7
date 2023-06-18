import bannerImage from "../assets/about-banner.png";
import BannerComponent from "../components/Banner/Banner";

import aboutData from "../datas/about.json";
import LegalsComponent from "../modules/Legals/Legals";

export default function AboutPage() {
    return (
        <>
                <BannerComponent source={bannerImage}>
                </BannerComponent>
                <LegalsComponent data={aboutData} />
        </>
    );
};