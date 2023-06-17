import { useEffect, useState } from "react";
import apartmentsService from "../services/ApartmentsService";

import bannerImage from "../assets/home-banner.png";
import BannerComponent from "../components/Banner/Banner";

export default function HomePage() {
    const [apartments, setApartments] = useState([]);

    useEffect(() => { 
        apartmentsService.getAll().then(setApartments);
    }, []);

    return (
        <div>
            <BannerComponent source={bannerImage}>

            </BannerComponent>
        </div>
    );
};