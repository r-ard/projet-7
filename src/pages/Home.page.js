import { useEffect, useState } from "react";
import apartmentsService from "../services/ApartmentsService";

import bannerImage from "../assets/home-banner.png";
import BannerComponent from "../components/Banner/Banner";
import GalleryComponent from "../components/Gallery/Gallery";
import ThumbComponent from "../components/Thumb/Thumb";
import { useNavigate } from "react-router-dom";
import TypographyComponent from "../components/Typography/Typography";

export default function HomePage() {
    const navigate = useNavigate();
    const [apartments, setApartments] = useState([]);

    useEffect(() => { 
        apartmentsService.getAll().then(setApartments);
    }, []);

    return (
        <>
            <BannerComponent source={bannerImage}>
                <TypographyComponent type="h1">
                    Chez vous, partout et ailleurs
                </TypographyComponent>
            </BannerComponent>

            <GalleryComponent>
                {
                    apartments.map((a, index) => (
                        <ThumbComponent
                            key={`apartments-item-${index}`}
                            image={a.cover}
                            title={a.title}
                            onClick={() => navigate('/apartment', { state: { id: a.id } })}
                        />
                    ))
                }
            </GalleryComponent>
        </>
    );
};